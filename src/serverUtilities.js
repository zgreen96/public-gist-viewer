const axios = require('axios');
const API_URL = 'http://localhost:3000';


//get gists based on username (valid usernames found in db.json file). 
//If no data returned, return an object telling the user to try again. Will test the user not found case later
export const getUserGists = async (username) => {
    const response = await axios.get(API_URL + '/gists?user=' + username);
    console.log(response.data);                                                 //delete later
    //if (response.data.length > 0 ){
        return response.data;
    /*}
    else {
        const noUser = [{
            "id": 0,
            "user": "no user"
            "description": "User not found. Click home and try again"
            favorite: false,
        }];
        return noUser
    }*/
}

export const getGist = async (gistId) => {
    const response = await axios.get(API_URL + 'gists?id=' + gistId);
    return response.data;
}

export const toggleFavoriteAPI = async (gist) => {
    var gistId = gist.id;
    const response = await axios.put(API_URL + '/gists/' + gistId, gist);
    console.log(response.data);
    return response.data;
}

export const getAllFavorites = async() => {
    const response = await axios.get(API_URL + '/gists?favorite=true');
    return response.data;
}

export const getDetailAPI = async (gistId) => {
    const response = await axios.get(API_URL + '/detail?gistId=' + gistId)
    return response.data;
}
