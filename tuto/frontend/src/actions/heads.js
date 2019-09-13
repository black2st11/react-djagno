import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_HEADS, DELETE_HEAD, ADD_HEAD } from './types';
import { tokenConfig } from './auth';

//GET HEADS
export const getHeads = () => (dispatch, getState) => {
    axios
        .get("/api/heads/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_HEADS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE HEAD
export const deleteHead = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/heads/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteHead: "Head deleted" }))
            dispatch({
                type: DELETE_HEAD,
                payload: id
            });
        })
        .catch(err =>
            console.log(err));
};

//ADD HEAD
export const addHead = head => (dispatch, getState) => {
    axios
        .post('/api/heads/', head, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addHead: "Head Added" }))
            dispatch({
                type: ADD_HEAD,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};