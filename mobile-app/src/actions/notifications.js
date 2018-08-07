import { SET_NOTIFICATION, DELETE_NOTIFICATION } from "../types/services";

export const setNotification = message => {
    return dispatch => {
        dispatch({
            type: SET_NOTIFICATION,
            payload: message
        });
    }
};

export const deleteNotification = id => {
    return dispatch => {
        dispatch({
            type: DELETE_NOTIFICATION,
            payload: id
        })
    }
} ;
