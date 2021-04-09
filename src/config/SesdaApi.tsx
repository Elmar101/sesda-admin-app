
const baseUrl = 'http://172.16.208.15:8888/api/admin';

export const sesdaApiUrl = `${baseUrl}/login`;

export const getAllCitizen = `${baseUrl}/citizen`;



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

