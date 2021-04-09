import {getAllCitizen} from '../config/SesdaApi';
import sesdaHttpClient from '../shared/httpClient';


export const getAllCitizens =()=>{ 
    return sesdaHttpClient.get<any>(getAllCitizen).then( (response:any) =>{
            console.log(response);
    });
}

