 import axios from "axios";

//Connects react with spring server
const USER_API_BASE_URL = "http://localhost:8080/user/register";

class UserService{

    //Get user method
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    getLoggedInUser(){
        return axios.get("http://localhost:8080/user/MyProfile");
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    updateUser(user){
        return axios.put("http://localhost:8080/user/MyProfile" + '/' , user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' +  userId);
    }
}

export default new UserService()