const Joi = require('joi');
async function isUUID(ctx,name){
    const validation = Joi.validate(name, Joi.string().uuid());
    if (validation.error) return false;
    return true;
}

module.exports = isUUID;
  