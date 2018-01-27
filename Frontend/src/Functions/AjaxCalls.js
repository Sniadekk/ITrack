const axios = require('axios');
//axios.defaults.baseURL = "http://80.211.222.216:8081";
axios.defaults.baseURL ="http://localhost:8080";
export const getCategories = () => {
    return axios.get("/category/")
        .then(response => response.data);
};

export const getItems = (categoryId) => {
    return axios.get("/category/" + categoryId + "/item/")
        .then(response => response.data);
};

export const addItem = (categoryId, json) => {
    return axios.post("/category/" + categoryId + "/item/", json)
        .then(response => response);

};

export const deleteItem = (categoryId, itemId) => {
    return axios.delete("/category/" + categoryId + "/item/" + itemId)
        .then(response => response);
};

export const updateItem = (categoryId, itemId, json) => {
    return axios.put("/category/" + categoryId + "/item/" + itemId, json)
        .then(response => console.log(response));

};

export const addCategory = (json) => {
    return axios.post("/category/", json)
        .then(response => response);

};