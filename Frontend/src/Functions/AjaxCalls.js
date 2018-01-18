const axios = require('axios');
axios.defaults.baseURL ="http://localhost:8080/";
export const getCategories = ()=> {
    let data = null;
    axios.get('category/')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};