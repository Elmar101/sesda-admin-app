import {sesdaApi} from '../config/SesdaApi';
import sesdaHttpClient from '../shared/httpClient';


export const getAllCitizens =()=>{ 
    return sesdaHttpClient.get<any>(sesdaApi.getAllCitizen).then( (response:any) =>{
            console.log(response);
    });
}

