import axios from "axios";


const BASE_URL = "http://localhost:1337/api";

const getPost = axios.get(BASE_URL+'/clientes');

export default{
    getPost
}