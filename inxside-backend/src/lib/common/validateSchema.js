//@flow
const Joi = require('joi');
// validates schema, return 400 error if not valid
async function validateSchema(ctx, schema){
    const result = Joi.validate(ctx.request.body, schema);
    if (result.error) {
      ctx.status = 400;
      ctx.body = {
        name: 'WRONG_SCHEMA',
        payload: result.error,
      };
      return false;
    }
    return true;
};

module.exports = validateSchema;