import { GET_HEADS, DELETE_HEAD, ADD_HEAD } from '../actions/types.js';

const initialState = {
    heads: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HEADS:
            return {
                ...state,
                heads: action.payload
            }
        case DELETE_HEAD:
            return {
                ...state,
                heads: state.heads.filter(head => head.id !== action.payload)
            }
        case ADD_HEAD:
            return {
                ...state,
                heads: [...state.heads, action.payload]
            }
        default:
            return state;

    }
}