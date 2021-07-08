import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('user')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
    }
    return req;
})

export const signIn = (formData, remember) => API.post(`/api/auth/signin/${remember ? 'remember' : 'dontremember'}`, formData);