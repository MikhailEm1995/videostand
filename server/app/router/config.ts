import * as path from 'path';
import * as express from 'express';

import { API } from '../configuration/app-configuration.ts';

declare function require(path: string): any;

const HANDLERS_PATH = './handlers/';

const getHandler: Function = (file: string) => {
    const handlerPath = getPath(`${HANDLERS_PATH}${file}`);

    return require(handlerPath);
};

const getPath: string = (file: string) => {
  return path.resolve(__dirname, file);
};

export default {
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
