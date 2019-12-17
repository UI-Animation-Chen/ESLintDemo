import recast from 'recast';

const code = `
    function add(a, b) {
        return a + b;
    }
`;

const ast = recast.parse(code);

console.log(ast.program.body[0]);

