const express = require('express');
const styleConvert = express.Router();
const sass = require('node-sass');
const {join,resolve} = require('path');
const { resolveSoa } = require('dns');

const stylePath = resolve('src/styles/');

function getSass(fileName){
    const sassFileName = fileName.replace('css','scss');
    const renderInput = { file: join(stylePath,sassFileName) };
    return Buffer.from(
        sass.renderSync(renderInput).css, 
        'utf-8'
    ).toString();
}

styleConvert.get('/:filename', (req, res,next) => {
    console.log('req: ', req.params.filename);
    res.set('content-type','text/css')
    try{
        res.status(200).send(getSass(req.params.filename))
    } catch(err){
        res.status(500).send({msg: 'Error Getting Sass File, '+err.message, stack:error.stack});
    }
    next()
});

module.exports = styleConvert;