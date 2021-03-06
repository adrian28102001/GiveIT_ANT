import * as AT from './authTypes'
import axios from "axios";

export const authenticateUser = (userObject) => async (dispatch) => {
    dispatch({
        type: AT.LOGIN_REQUEST
    });

    try {
        let email = userObject.email;
        let password = userObject.password;

        const response = await axios.post("http://localhost:8080/user/authenticate", {
            email: email,
            password: password
        });
        let token = response.data.token;
        localStorage.setItem('jwtToken', token);
        dispatch(success({username: response.data.name, isLoggedIn: true}));
        localStorage.setItem("user_email", email);
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
        localStorage.removeItem('user_email');
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

