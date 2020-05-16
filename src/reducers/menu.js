import { MAIN_MENU_PENDING, MAIN_MENU_FULFILLED, MAIN_MENU_REJECTED } from '../actions/menu'

const initialState = {
    loading: true,
    data: [],
    err: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case MAIN_MENU_PENDING:
            return { ...state, loading: true }
        case MAIN_MENU_FULFILLED:
            return { ...state, loading: false, data: action.payload }
        case MAIN_MENU_REJECTED:
            return { ...state, loading: false, err: action.payload }
        default:
            return state
    }
}