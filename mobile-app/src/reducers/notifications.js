import { SET_NOTIFICATION, DELETE_NOTIFICATION } from "../types/services";

const initState = {
    messages: []
};

export const notificationsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_NOTIFICATION: {
            const message = { id: new Date().getTime(), ...action.message };

            return { ...state, messages: [message].concat(state.messages) };
        }
        case DELETE_NOTIFICATION: {
            return { ...state, messages: state.messages.filter(({ id }) =>  id !== action.id ) };
        }
        default: return state;
    }
};
