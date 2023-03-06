const verifica = require('./verifica');


test('verifica generale', () =>{
    expect(verifica.offusca("A").toBe("4"));
    expect(verifica.offusca("ANBD").toBe("4N8D"));

} );