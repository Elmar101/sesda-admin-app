import {sesdaApiUrl} from '../config/SesdaApi';
import sesdaHttpClient from '../shared/httpClient';

export let token: string | undefined | null;

export const LoginService = (creds:any) => {
    
    return sesdaHttpClient.post<any>(sesdaApiUrl ,creds).then( (response:any) =>{
            if (!creds.userName || !creds.password) return;
            if(response){
                sessionStorage.setItem("token",response.data.token);
            } return sessionStorage.getItem("token");
    });
}

export const fetchUserDataByAuthToken = () => {
    return sesdaHttpClient.get(sesdaApiUrl);
}