(async () => {
    const Planet = require('./models/Planet');

    /*
        const newPlanet = await Planet.create({
            name: "Venus",
            position: 5,
        });
    */

    const seePlanets = await Planet.findByPk(1);

    console.log(seePlanets);

})();