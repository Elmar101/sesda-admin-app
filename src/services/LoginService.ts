import {sesdaApi} from '../config/SesdaApi';
import { TOKEN_FIELD } from '../config/storage-constans';
import { User } from '../models/User';
import sesdaHttpClient from '../shared/httpClient';
import {StorageService} from '../x-lib/services/StorageService';

const storage:StorageService  = new StorageService();

//const sesdaApi:SesdaApi = new SesdaApi();

export let token: string | undefined | null;
//post login
export const LoginService = (creds:User) => {  
    return sesdaHttpClient
            .post<User>(sesdaApi.sesdaApiUrl ,creds)
            .then( (response:any) =>{
                if (!creds.userName || !creds.password) return;
                if(response){
                    storage.saveItem(TOKEN_FIELD,response.data.token);//response:any
                } return storage.getItem(TOKEN_FIELD);
            });
}

//get Admin Data
export const fetchUserDataByAuthToken = () => { return sesdaHttpClient.get(sesdaApi.sesdaApiUrl); }

//for Guard 
export const _authenticated = ():boolean => {  
    if(storage.getItem(TOKEN_FIELD) !=null){
        return true;
    }return false;
}

//for logout

export const logOut = () => { 
    storage.removeItem(TOKEN_FIELD);
}