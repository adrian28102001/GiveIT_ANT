import * as PT from "./postTypes";

const initialState = {
    post: "",
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PT.SAVE_POST_REQUEST:
        case PT.FETCH_POST_REQUEST:
        case PT.UPDATE_POST_REQUEST:
        case PT.DELETE_POST_REQUEST:
            return {
                ...state,
            };
        case PT.POST_SUCCESS:
            return {
                post: action.payload,
                error: "",
            };
        case PT.POST_FAILURE:
            return {
                post: "",
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;