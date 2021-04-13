const BASE_URL = 'http://172.16.208.15:8888';

const SESDA_API_URL = 'api/sesda';

function makeUrl(url: string): string {
    return `${BASE_URL}/${SESDA_API_URL}/${url}`;
}


export const API_LOGIN = makeUrl('login');
export const API_TREE = makeUrl('tree');


class SesdaApi{

    baseUrl = 'http://172.16.208.15:8888/api/admin';

    sesdaApiUrl = `${this.baseUrl}/login`;

    getAllCitizen = `${this.baseUrl}/citizen`;

    getAllTrees = `${this.baseUrl}/getalltree`;
}

export const sesdaApi:SesdaApi = new SesdaApi();

/**

 axios({method: "POST", url: sesdaApiUrl})


 const [status1, data1, error1] = useHttpRequest({method: "POST", sesdaApiUrl});
 const [status2, data2, error2] = useHttpRequest({method: "POST", sesdaApiUrl});
 const [status3, data3, error3] = useHttpRequest({method: "POST", sesdaApiUrl});

const loading = [status1, status2, status3].any(item => item === 'pending');

status => 'idle' | 'pending' | 'completed' | 'rejected';

return (
    <div>
        //Page content
        <LoadingIndicator fullscreen={true} open={loading} />
    </div>
)

 * */

