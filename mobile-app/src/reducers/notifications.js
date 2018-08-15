import { SET_NOTIFICATION, DELETE_NOTIFICATION } from "../types/services";

const initState = {
    messages: []
};

export const notificationsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_NOTIFICATION: {
            return { ...state, messages: state.messages.concat([action.payload]) };
        }
        case DELETE_NOTIFICATION: {
            return { ...state, messages: state.messages.filter(({ id }) =>  id !== action.id ) };
        }
        default: return state;
    }
};
