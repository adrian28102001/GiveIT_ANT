import * as PT from "./postTypes";
import axios from "axios";


export const savePost = (post) => {
    return (dispatch) => {
        dispatch({
            type: PT.SAVE_POST_REQUEST,
        });
        axios
            .post("http://localhost:8080/posts", post)
            .then((response) => {
                dispatch(postSuccess(response.data));
            })
            .catch((error) => {
                dispatch(postFailure(error));
            });
    };
};

export const fetchPost = (postId) => {
    return (dispatch) => {
        dispatch({
            type: PT.FETCH_POST_REQUEST,
        });
        axios
            .get("http://localhost:8080/posts/" + postId)
            .then((response) => {
                dispatch(postSuccess(response.data));
            })
            .catch((error) => {
                dispatch(postFailure(error));
            });
    };
};

export const updatePost = (post) => {
    return (dispatch) => {
        dispatch({
            type: PT.UPDATE_POST_REQUEST,
        });
        axios
            .put("http://localhost:8080/posts", post)
            .then((response) => {
                dispatch(postSuccess(response.data));
            })
            .catch((error) => {
                dispatch(postFailure(error));
            });
    };
};

export const deletePost = (postId) => {
    return (dispatch) => {
        dispatch({
            type: PT.DELETE_POST_REQUEST,
        });
        axios
            .delete("http://localhost:8080/posts/" + postId)
            .then((response) => {
                dispatch(postSuccess(response.data));
            })
            .catch((error) => {
                dispatch(postFailure(error));
            });
    };
};

const postSuccess = (post) => {
    return {
        type: PT.POST_SUCCESS,
        payload: post,
    };
};

const postFailure = (error) => {
    return {
        type: PT.POST_FAILURE,
        payload: error,
    };
};

export const fetchCategories = () => {
    return dispatch => {
        dispatch({
            type: PT.POST_CATEGORIES
        })
    }
}