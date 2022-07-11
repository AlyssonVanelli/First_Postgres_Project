const Planet = require('../models/Planet');
const Satelite = require('../models/Satelite');

Planet.hasMany(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" });

module.exports = { Planet, Satelite };