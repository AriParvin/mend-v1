// const axios = require('axios')
import axios from "axios";

const service = axios.create({
     baseURL: process.env.REACT_APP_SERVER_URL,
     withCredentials: true
});

const signup = (email, username, password) => {
     return service
          .post("/signup", { email, username, password })
          .then(response => response.data);
};

const login = (username, password) => {
     return service
          .post("/login", { username, password })
          .then(response => response.data);
};

const logout = () => {
     return service.post("/logout").then(response => response.data);
};

const loggedin = () => {
     return service.get("/loggedin").then(response => response.data);
};

const getGuides = () => {
     return service
          .get('/guides')
          .then(response => response.data)
}

const getGuide = (id) => {
     console.log(id)
     return service
          .get(`/guides/${id}`)
          .then(response => response.data)
}
const deleteGuide = (id) => {

     return service
          .delete(`/guides/${id}`)
          .then(response => response.data)
}

const addGuide = (data) => {
     return service
          .post('/guides', data)
          .then(response => response.data)
}


const editGuide = (id, data) => {
     return service
          .put(`/guides/${id}`, data)
          .then(response => response.data)
}




export { signup, login, logout, loggedin, addGuide, getGuides, getGuide, deleteGuide, editGuide };
