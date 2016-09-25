'use strict';

function parse(template) {
    const splited = template.split('${').map(x => x.split('}'));
    const strings = [];
    const variables = [];

    splited.forEach(item => {
        if (item.length === 1) {
            strings.push(item[0]);
        }

        if (item.length === 2) {
            variables.push(item[0]);

            strings.push(item[1]);
        }
    });

    return { strings, variables };
}

exports.compile = (template) => {
    const parsed = parse(template);

    return (str) => {
        const data = {};

        parsed.variables.forEach((name, index) => {
            const variable = parsed.variables[index];
            const leftStr = parsed.strings[index];
            const rightStr = parsed.strings[index + 1];

            if (leftStr === '' && rightStr === '') {
                data[variable] = str;
                return;
            }

            let leftIndex = leftStr === '' ? 0 : str.indexOf(leftStr);
            let rightIndex = rightStr === '' ? str.length : str.indexOf(rightStr);

            if (leftIndex === -1 && rightIndex === -1) { return; }

            leftIndex = leftIndex === -1 ? 0 : leftIndex + leftStr.length;

            if (rightIndex === -1) {
                rightIndex = str.length;
            }

            data[variable] =  str.substring(leftIndex, rightIndex);
        });

        return data;
    };
};
