import axios from "axios";
import { TOKEN_FIELD } from "../config/storage-constans";
import {StorageService } from "../x-lib/services/StorageService";

const sesdaHttpClient = axios.create({ timeout: 10000 });

const storage:StorageService  = new StorageService();

sesdaHttpClient.interceptors.request.use(
    config=>{
        const token = storage.getItem(TOKEN_FIELD);
        if(token) {
            config.headers['Authorization'] = token;
        }
        return config;
    },
    error=>{
        return Promise.reject(error);
    }   
)

export default sesdaHttpClient;