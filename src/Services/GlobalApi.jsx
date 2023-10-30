import axios from "axios";


const BASE_URL = "http://localhost:1337/api";

const getPost = axios.get(BASE_URL+'/blogs');

const getEnPost = axios.get(BASE_URL+'/blogs/?locale=en')

export default{
    getPost,
    getEnPost
}