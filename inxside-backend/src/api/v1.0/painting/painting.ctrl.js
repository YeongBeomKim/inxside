const { Context } = require('koa');
const Joi = require('joi');
const mongoose = 'mongoose';
const { validateSchema } = require('lib/common');

const { Painting } = require('db/models');

exports.uploadPainting = async (ctx) => {
    let {
        title,
        description,
        paintingUri,
        date
    } = ctx.request.body;
    
    const schema = Joi.object({
        title: Joi.string().required().min(1).max(120),
        description: Joi.string().required().min(1),
        paintingUri: Joi.string().uri().allow(null),
        date: Joi.string().required()
    });

    if(!validateSchema(ctx, schema)) return;
    try{
        const painting = new Painting({
            title,
            description,
            paintingUri,
            date
        });
        await painting.save();
        console.log(3);
        ctx.body = {
            _id: painting._id,
            title,
            description,
            paintingUri,
            date,
        };
    } catch(e) {
        ctx.throw(500,e);
    }

};