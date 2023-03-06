// verifica.js

// Restituisce una copia della stringa s sostituendo i caratteri secondo la seguente tabella
// A -> 4
// B -> 8
// O -> 0
// I -> 1
// T -> 7
// E -> 3
// Parametri: stringa s
// Valore di ritorno: copia della stringa s in maiuscolo con i caratteri sostituiti
// La stringa originale non viene modificata.
function offusca(s) {
    s1 = s.trim();
    s1 = s1.toUpperCase()
    s1 = s1.replace(/(\w+)\s(\w+)/, "$2 $1");
    s1 = s1.replaceAll('A', '4');
    s1 = s1.replaceAll('B', '8')
    s1 = s1.replaceAll('O', '0')
    s1 = s1.replaceAll('I', '1')
    s1 = s1.replaceAll('T', '7')
    s1 = s1.replaceAll('E', '3')
    return s1;
}
// Restituisce il valore della funzione y=f(x) nel punto x
// Parametri: funz è la funzione da valutare
//            x è il valore della variabile indipendente
// Valore di ritorno: numero reale o codice (NaN, Infinity, ecc..)
// es. calcola('sin(x) + 1', 1.5) restituisce 1.9974949866040546

// Questa funzione dipende dalla libreria expr-eval
// npm install expr-eval
function calcola(funz, xval){
    const Parser = require('expr-eval').Parser;
    const parser = new Parser();
    const expr = parser.parse(funz);
    return expr.evaluate({ x: xval });
}


module.exports = {
    offusca, calcola
};

