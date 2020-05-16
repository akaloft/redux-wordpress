import axios from 'axios'
import { API, MAIN_MENU } from '../helper'

export const MAIN_MENU_PENDING = "MAIN_MENU_PENDING"
export const MAIN_MENU_FULFILLED = "MAIN_MENU_FULFILLED"
export const MAIN_MENU_REJECTED = "MAIN_MENU_REJECTED"


export function getMainMenu() {
    return dispatch => {
        dispatch({
            type: 'MAIN_MENU',
            payload: axios.get(`${API}/${MAIN_MENU}`)
                .then(res => res.data)
        })
    }
} 