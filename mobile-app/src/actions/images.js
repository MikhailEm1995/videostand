import { SET_IMAGES_ORDER_REQUEST, SET_IMAGES_ORDER_SUCCESS, SET_IMAGES_ORDER_FAILURE } from '../types/images';

import getMessage from '../utils/getMessage';

import api from '../constants/api.js';

export const setImagesOrder = (images) => {
    return (dispatch, getState) => {
        const currentState = getState();

        dispatch({
            type: SET_IMAGES_ORDER_REQUEST,
            images
        });

        fetch(api.method.post.gallery.order, {
            method: 'POST',
            body: images
        })
            .then(res => res.json())
            .then((json) => {
                console.log(json);
                dispatch(getMessage.success('порядок изображений изменен', 'Вы изменили порядок изображений'));
                dispatch({
                    type: SET_IMAGES_ORDER_SUCCESS,
                    payload: json
                });
            })
            .catch((err) => {
                dispatch(getMessage.error('не удалось изменить порядок изображений', 'Попробуйте еще раз'));
                dispatch({
                    type: SET_IMAGES_ORDER_FAILURE,
                    images: currentState.images.fromServer
                });
            });
    };
};
