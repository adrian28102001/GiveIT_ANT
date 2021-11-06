import axios from "axios";

//Connects react with spring server
const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService{

    //Get user method
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' +  userId, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' +  userId);
    }
}

export default new UserService()