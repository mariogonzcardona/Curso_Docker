// Generamos una prueba para la funcion de syncDB.

const syncDB = require("../../tasks/sync-db");

describe('syncDB', () => {
    test('syncDB debe de ejecutar el proceso 2 veces', () => {
        syncDB();
        const times = syncDB();
        console.log("Se llamo a la funcion syncDB", times);

        expect(times).toBe(2);
    });
});