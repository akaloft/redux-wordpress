import { GET_POST_PENDING, GET_POST_FULFILLED, GET_POST_REJECTED } from '../actions/postAction'

const initialState = {
    loading: true,
    data: [],
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_PENDING:
            return {
                ...state
            }
        case GET_POST_FULFILLED:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case GET_POST_REJECTED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}