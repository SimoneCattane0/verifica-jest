// filename city.test.js

const f = require('./city');

// Dichiarazione archivio cities

// Inizializzazione
// Predispongo l'archivio con i seguenti nomi di città
// Milano Bologna Firenze Roma Napoli Palermo

// Distruzione archivio

// Test
test('Controllo presenza nomi', () => {
    expect(f.cerca()).toBeFalsy();
    expect(f.cerca(cities)).toBeFalsy();
    expect(f.cerca(cities, "Roma")).toBeTruthy();
    expect(f.cerca(cities, "Milano")).toBeTruthy();
    expect(f.cerca(cities, "Napoli")).toBeTruthy();
    expect(f.cerca(cities, "Palermo")).toBeTruthy();
});

test('Rimozione e controllo', () => {
    expect(f.cerca(cities, "Palermo")).toBeTruthy();
    cities.pop();
    expect(f.cerca(cities, "Palermo")).toBeFalsy();
});
