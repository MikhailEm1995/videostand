import { SET_IMAGES_ORDER_REQUEST, SET_IMAGES_ORDER_SUCCESS, SET_IMAGES_ORDER_FAILURE } from '../types/images';

import { VIDEO } from "../constants/propTypesImageCard";

const initState = {
    fromServer: [
        {
            src: 'https://picsum.photos/300',
            duration: '00:01:28'
        },
        {
            src: 'https://picsum.photos/300',
            duration: '00:01:28',
            title: 'Test',
            type: VIDEO
        },
        {
            src: 'https://picsum.photos/300',
            duration: '00:01:28',
            title: 'Test 1',
            desc: 'Test description'
        },
        {
            src: 'https://picsum.photos/300',
            duration: '00:01:28',
            title: 'Test 1',
            desc: 'Test description'
        },
        {
            src: 'https://picsum.photos/300',
            duration: '00:01:28'
        },
    ],
    isLoading: false
};

export const imagesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_IMAGES_ORDER_REQUEST: {
            return { ...state, isLoading: true, fromServer: action.images };
        }
        case SET_IMAGES_ORDER_SUCCESS: {
            return { ...state, isLoading: false, fromServer: state.fromServer };
        }
        case SET_IMAGES_ORDER_FAILURE: {
            return { ...state, isLoading: false, fromServer: action.images };
        }
        default: return state;
    }
};
