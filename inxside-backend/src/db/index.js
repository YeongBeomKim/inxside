const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

const {
    MONGO_URI: mongoURI
} = process.env;

module.exports = (function () {
    mongoose.Promise = global.Promise;
    return {
        connect () {
            return mongoose.connect(mongoURI, {
            }).then(
                () => {
                    console.log('Successfuly connected to mongodb');
                }
            ).catch(e=>{
                console.log(e);
            });
        },
        disconnect () {
            return mongoose.disconnect();
        }
    };
})();
