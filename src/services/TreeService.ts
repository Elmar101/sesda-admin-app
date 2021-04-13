import { sesdaApi } from "../config/SesdaApi";
import sesdaHttpClient from "../shared/httpClient";

export class TreeService {
    public fetchOrganizationsTree(ids: string[]){
        return sesdaHttpClient.post(sesdaApi.getAllTrees, ids)
        .then(response => console.log(response))
    }
}


