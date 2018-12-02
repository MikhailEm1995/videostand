const path = require('path');
const express = require('express');

const { API } = require('../constants/app-configuration.js');

const HANDLERS_PATH = './handlers/';

const getHandler = (file) => {
    const handlerPath = getPath(`${HANDLERS_PATH}${file}`);

    return require(handlerPath);
};

const getPath = file => path.resolve(__dirname, file);

const configureMethod = route => handlerName => (middlewares = []) => ({
  [`${API}/${route}`]: {
    handler: getHandler(handlerName),
    middlewares
  }
});

const picturesRoute = configureMethod('pictures');

module.exports = {
  'get': {
    ...picturesRoute('getPictures')(),
    ...configureMethod('test')('test')()
  },
  'post': picturesRoute('postPictures')([express.json()]),
  'put': {
    ...picturesRoute('putPictures')([express.json()]),
    ...configureMethod('pictures/order')('putPicturesOrder')([express.json()])
  },
  'delete': picturesRoute('deletePictures')([express.json()])
};
