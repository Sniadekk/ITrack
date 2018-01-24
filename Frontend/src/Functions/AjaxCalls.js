const axios = require('axios');
axios.defaults.baseURL ="http://localhost:8080/";


export const getCategories = () => {
 return axios.get("category/")
     .then(response => response.data);
};

export const getItems = (categoryId) =>{
 return axios.get("category/" + categoryId + "/item/")
     .then(response => response.data);
};

export const addItem = (categoryId, json) =>{
    return axios.post("category/" + categoryId + "/item/", json)
        .then((response)=>  response);

};