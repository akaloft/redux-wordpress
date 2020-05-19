import axios from 'axios'
import { API, WP } from '../helper'


export const GET_POST_PENDING = "GET_POST_PENDING"
export const GET_POST_FULFILLED = "GET_POST_FULFILLED"
export const GET_POST_REJECTED = "GET_POST_REJECTED"


export function getPosts(params) {
    return dispatch => {
        dispatch({
            type: 'GET_POST',
            payload: axios.get(`${API}/${WP}/posts`, { params })
                .then(result => result)
        })
    }
}


