const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://fabio:fabioduarte8@tutorialcluster-hqah2.mongodb.net/test?)', {MongoClient:connect}/*{useMongoClient: true}*/);
/*mongoose.Promise = global.Promise;*/

module.exports = mongoose;
