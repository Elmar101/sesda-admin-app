import {Grid,Paper,Avatar,FormControl}from '@material-ui/core';
import useStyles from '../../styles/Material';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useState} from 'react';
import { LoginService, fetchUserDataByAuthToken } from '../../services/LoginService';
import  XSnackbar from '../../x-lib/components/XSnackbar';
import {User} from '../../models/User';
import XButton from '../../x-lib/components/XButton';
import XTextField from '../../x-lib/components/XTextField';
import XInput from '../../x-lib/components/XInput';
import XTypography from '../../x-lib/components/XTypography';
import { useHistory} from 'react-router-dom';
import XLoader from '../../x-lib/components/XLoader';

const SignIn = (props:any) => {
    const history = useHistory();
    const classes = useStyles(); 
    const {showLoader} = props;

    const [user,setUser] = useState<User>(
        {userName:'', password: '' }
    )

    const [state, setState] = useState<{status: string, type:any, messages: any}>({status: 'idle',type:null,
     messages: null});

    const LoginSubmitHandler = async (e:any) => {
        e.preventDefault();
        const {userName, password} = user;
        const creds = {userName, password};
        setState({...state, status: 'idle', type:null ,messages:null});
        console.log('WORKS')
        
        try{
            if (!userName || !password) return ;
            setState({...state,status:"pending",messages:null});
            await LoginService(creds);
            await fetchUserDataByAuthToken();
            setState({...state,status:"completed",type:'success',messages:'dmadmin sistemine daxil olursuz'});
             setTimeout(() => {
                 history.push("/citizen");
            }, 3000)
        }catch(err){
            setState({...state,status: 'rejected',type:'error', messages: err.response.data.message});
            setTimeout(()=>setState({...state, status: 'idle', type:null ,messages:null}),3000);
        }
        setUser({...user,userName:'',password:''})
    }


    const handlePasswordChange = (e:any) => {
        setUser({ ...user, password: e.target.value });
        setState({...state,messages:null});
    };

    const handleUserName = (e:any)=> {
         setUser({...user,userName:e.target.value}); 
         setState({...state,messages:null});
    } 

    const handleClickShowPassword = () => {
        setUser({ ...user, showPassword: !user.showPassword });
    };

    const buttonEnabled:boolean = (user.userName && user.password) ? false : true;

    return (
        <>
            <form onSubmit={LoginSubmitHandler}>
                <Grid>
                    <Paper elevation={10} className={classes.papelStyle}>
                        <Grid className={classes.alignCenter}>
                            <Avatar className={classes.avatarStyle}> 
                                <LockOutlinedIcon/>
                            </Avatar>
                            <XTypography 
                                style={{color:"green"}} 
                                variant="h6" 
                                component="h2"
                                title="ADMİNİSTRATORUN İŞ YERİ"
                            />
                        </Grid>
                        <XTextField 
                            onChange={ handleUserName }
                            value={user.userName}
                            label="istifadəcçi adı" 
                            placeholder="istifadəçi adı*"
                            fullWidth 
                            />
                        
                        <FormControl fullWidth style={{marginTop: '15px'}}>
                             <XInput 
                                fullWidth 
                                label="Şifrə"
                                onChange={handlePasswordChange}
                                value={user.password}
                                type={user.showPassword}
                                onClick={handleClickShowPassword}
                                showPassword ={user.showPassword}
                            />
                        </FormControl>
                        <XButton 
                            type="submit" 
                            disabled={buttonEnabled || showLoader} 
                        >
                        {
                            state.status==="pending" ? <XLoader/> : "Daxil ol"
                        }
                        </XButton>
                    </Paper>
                </Grid>
            </form>
            {
              <XSnackbar type={state.type} message={state.messages}/>
            }
        </>
    )
}
export default SignIn;
