import { SET_MESSAGE } from "../types/services";

const initState = '';

export const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_MESSAGE: {
            return action.payload.message;
        }
        default: return state;
    }
};
