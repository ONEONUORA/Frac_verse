import axios from "axios";


const BASE_URL= 'https://fraverse-server.onrender.com/api/v1'


export const register=(userData)=>{
    return axios.post(`${BASE_URL}/register`, userData)
    
}



export const login=(credentials)=>{
    return axios.post(`${BASE_URL}/auth/login`, credentials)
}


export const resetpassword = (userData) =>{
    return axios.post(`${BASE_URL}/reset-password`, userData)
}  

export const forgetPassword = (userData) =>{
    return axios.post(`${BASE_URL}/forgot-password`, userData)
}
