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
            const id = action.payload;

            return { ...state, messages: state.messages.slice(0, id).concat(state.messages.slice(id+1)) };
        }
        default: return state;
    }
};
