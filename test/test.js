'use strict';

const test = require('ava');

const compile = require('../index').compile;

test('should detemplate empty string', t => {
    const template = '';
    const str = '';

    const parse = compile(template);
    const data = parse(str);

    t.deepEqual(data, {});
});

test('should detemplate with empty template', t => {
    const template = '';
    const str = 'Hello user';

    const parse = compile(template);
    const data = parse(str);

    t.deepEqual(data, {});
});

test('should detemplate with empty string', t => {
    const template = 'template';
    const str = '';

    const parse = compile(template);
    const data = parse(str);

    t.deepEqual(data, {});
});

test('should not find variables in string template', t => {
    const template = 'template';
    const str = 'string';

    const parse = compile(template);
    const data = parse(str);

    t.deepEqual(data, {});
});

test('should detemplate with template consisting only of one variable', t => {
    const template = '${text}';
    const str = 'string';

    const parse = compile(template);
    const data = parse(str);

    t.deepEqual(data, {
        text: 'string'
    });
});

test('should detemplate with template consisting of one variable', t => {
    const template = 'Hello ${user}!';
    const str = 'Hello username!';

    const parse = compile(template);
    const data = parse(str);

    t.deepEqual(data, {
        user: 'username'
    });
});

test('should not find variables in template consisting of one variable', t => {
    const parse = compile('Hello ${user}!');
    const data = parse('username');

    t.deepEqual(data, {});
});

test('should support ES template literal delimiters', t => {
    const parse = compile('Hello ${user}!');
    const data = parse('Hello ${user}!');

    t.deepEqual(data, {
        user: '${user}'
    });
});

test('should detemplate several variables', t => {
    const parse = compile('${x1} + ${x2} = ${x3}');
    const data = parse('2 + 3 = 5');

    t.deepEqual(data, {
        x1: '2',
        x2: '3',
        x3: '5'
    });
});
