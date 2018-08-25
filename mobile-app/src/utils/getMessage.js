import { SET_NOTIFICATION } from '../types/services';

const getMessage = {};

function getMessageConf(type) {
    return (title, content) => ({
        type: SET_NOTIFICATION,
        message: { type, title, content }
    });
}

const types = ['error', 'success', 'info', 'warning', 'message'];

types.forEach(type => getMessage[type] = getMessageConf(type));

export default getMessage;