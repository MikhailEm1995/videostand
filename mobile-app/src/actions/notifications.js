import { SET_NOTIFICATION, DELETE_NOTIFICATION } from "../types/services";

export const setNotification = message => {
    return dispatch => {
        dispatch({
            type: SET_NOTIFICATION,
            message
        });
    }
};

export const deleteNotification = id => {
    return dispatch => {
        dispatch({
            type: DELETE_NOTIFICATION,
            id
        })
    }
} ;
