import * as AT from './authTypes'
import axios from "axios";

export const authenticateUser = (email, password) => async (dispatch) => {
    dispatch({
        type: AT.LOGIN_REQUEST
    });

    try {
        const response = await axios.post("http://localhost:8080/user/authenticate", {
            email: email,
            password: password
        });
        let token = response.data.token;
        localStorage.setItem('jwtToken', token);
        dispatch(success({username: response.data.name, isLoggedIn: true}));
        return Promise.resolve(response.data);
    } catch (error) {
        dispatch(failure());
        return Promise.reject(error);
    }
}

export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type: AT.LOGOUT_REQUEST
        });
        localStorage.removeItem('jwtToken');
        dispatch(success(false));
    }
}

const success = isLoggedIn => {
    return {
        type: AT.SUCCESS,
        payload: isLoggedIn
    };
};


const failure = isLoggedIn => {
    return {
        type: AT.FAILURE,
        payload: isLoggedIn
    };
};

