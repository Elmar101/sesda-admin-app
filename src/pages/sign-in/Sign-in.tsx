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
import { useHistory, useRouteMatch } from 'react-router-dom';
import XLoader from '../../x-lib/components/XLoader';

const SignIn = (props:any) => {
    let history = useHistory();
    const classes = useStyles(); 
    const {showLoader} = props;

    const [user,setUser] = useState<User>(
        {userName:'', password: '' }
    )
    const [state, setState] = useState<{status: string; data: any, error: any}>({status: 'idle', data: null, error: null});

    const LoginSubmitHandler = async (e:any) => {
        e.preventDefault();
        const {userName, password} = user;
        const creds = {userName, password};
        setState({...state,status:"pending",error:null});
        
        try{
            await LoginService(creds);
            await  fetchUserDataByAuthToken();
                  history.push("/citizen");
        }catch(err){
            setState({...state,error: err.response.data.message});
            setTimeout(()=>setState({...state, error:null}),3000);
        }
        setUser({...user,userName:'',password:''})
    }


    const handlePasswordChange = (e:any) => {
        setUser({ ...user, password: e.target.value });
        setState({...state,error:null});
    };

    const handleUserName = (e:any)=> {
         setUser({...user,userName:e.target.value}); 
         setState({...state,error:null});
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
                            required/>
                        
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
                            buttonEnabl={buttonEnabled} 
                        >
                        {
                            state.status==="pending" ? <XLoader/> : "Daxil ol"
                        }
                        </XButton>
                    </Paper>
                </Grid>
            </form>
            {
              state.error && <XSnackbar type="error" error={state.error}/>
            }
        </>
    )
}
export default SignIn;
