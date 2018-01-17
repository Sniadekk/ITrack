const axios = require('axios');
axios.request(
    {
        url:"localhost:8080/category",
        withCredentials:true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }

    });

export const helloWorld = ()=> {
    axios.get('/')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};