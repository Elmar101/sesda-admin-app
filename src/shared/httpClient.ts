import axios from "axios";

const sesdaHttpClient = axios.create({ timeout: 10000 });

sesdaHttpClient.interceptors.request.use(
    config=>{
        const token = sessionStorage.getItem('token');
        if(token) {
            config.headers['Authorization'] = token;
        }
        return config;
    } 
)

export default sesdaHttpClient;