const path = require('path');
const express = require('express');

const { API } = require('../configuration/app-configuration.js');

const HANDLERS_PATH = '../routesHandlers/';

const getHandler = (file) => {
    const handlerPath = getPath(`${HANDLERS_PATH}${file}`);

    return require(handlerPath);
};

const getPath = (file) => {
  return path.resolve(__dirname, file);
};

module.exports = {
  'get': {
    [`${API}/pictures`]: {
      handler: getHandler('getPictures'),
      middlewares: []
    }
  },
  'post': {
    [`${API}/pictures`]: {
      handler: getHandler('postPictures'),
      middlewares: [express.json()]
    }
  },
  'put': {
    [`${API}/pictures`]: {
      handler: getHandler('putPictures'),
      middlewares: [express.json()]
    },
    [`${API}/pictures/order`]: {
      handler: getHandler('putPicturesOrder'),
      middlewares: [express.json()]
    }
  },
  'delete': {
    [`${API}/pictures`]: {
      handler: getHandler('deletePictures'),
      middlewares: [express.json()]
    }
  }
}
