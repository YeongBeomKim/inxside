const { Context } = require('koa');
const Joi = require('joi');
const mongoose = 'mongoose';
const { validateSchema } = require('lib/common');

const { Painting } = require('db/models');

exports.parsePaintings = async (ctx) => {
    try {
        const paintings = await Painting.setPaintings();
        ctx.body = paintings;
    } catch(e) {
        ctx.throw(500,e);
    }
}
exports.setPainting = async (ctx) => {
    try{
        const {id} = ctx.params;
        const painting = await Painting.setPainting(id);
        ctx.body = painting;
    } catch(e) {
        ctx.throw(500,e);
    }
    
}
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
exports.editPainting = async (ctx) => {
    let {
        title,
        description,
        paintingUri,
        date
    } = ctx.request.body;

    const {id} = ctx.params;
    const schema = Joi.object({
        title: Joi.string().required().min(1).max(120),
        description: Joi.string().required().min(1),
        paintingUri: Joi.string().uri().allow(null),
        date: Joi.string().required()
    });

    if(!validateSchema(ctx, schema)) return;

    try{
        painting = await Painting.findByIdAndUpdate(id,{
            title: title,
            description: description,
            paintingUri: paintingUri,
            date: date
        }).exec();
        if(!painting){
            ctx.status = 404; //Not Found
            return;
        }

        ctx.body = {
            _id: id,
            title,
            description,
            paintingUri,
            date,
        };
    } catch(e) {
        ctx.throw(500,e);
    }
}
//destroy
exports.deletePainting = async (ctx) => {
    const {id} = ctx.params;
    try {
        await Painting.findByIdAndDelete(id);
        ctx.body = {
            msg: `Painting(id: ${id}) was deleted`
        }
    } catch(e) {
        ctx.throw(500,e);
    }
}