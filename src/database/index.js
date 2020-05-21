const mongoose = require ('mongoose');

// vc tramsforma a conexão em uma constante e exporta ela
const mongodb = mongoose.connect('mongodb+srv://deploy:thingYota-api@thingyota-cluster-uqw8l.gcp.mongodb.net/test');
// const mongodb = mongoose.connect('mongodb+srv://fabio:fabioduarte8@tutorialcluster-hqah2.mongodb.net/test?');

module.exports = mongodb;
