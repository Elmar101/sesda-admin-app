import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme)=> 
    createStyles({
        succest:{
            backgroundColor: theme.palette.success.light
        },
        error:{
            backgroundColor: theme.palette.error.dark
        }
    })
)

export interface State extends SnackbarOrigin {
  open: boolean;
}

const HandlerService = (props:any) => {
    const classes:any = useStyles();
    const { type,message} = props;

    return (
    <div>
        {
            type ==='success' && <Snackbar
                                anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
                                open={true}         
                                autoHideDuration={3000}   
                            >
                                <SnackbarContent message={message} className={ clsx(classes[type])}/>
                            </Snackbar>
                            
        }
        {
            type ==='info' && <Snackbar
                                anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
                                open={true}         
                                autoHideDuration={5000}   
                            >
                                <SnackbarContent message={message} className={ clsx(classes[type])}/>
                            </Snackbar>
                            
        }

        {
            type ==='error' && <Snackbar
                                anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
                                open={true}         
                                autoHideDuration={5000}   
                            >
                                <SnackbarContent message={message} className={ clsx(classes[type])}/>
                            </Snackbar>
                            
        }

        {
            type ==='warning' && <Snackbar
                                anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
                                open={true}         
                                autoHideDuration={5000}   
                            >
                                <SnackbarContent message={message} className={ clsx(classes[type])}/>
                            </Snackbar>
                            
        }

    </div>
    );
}
export default HandlerService;



