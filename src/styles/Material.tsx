
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme)=> 
createStyles({
    root: {
      margin: '150px auto'
    },
    papelStyle:{
        padding: 20,
        margin: '150px auto',
        height: '48vh',
        width: 280
    },
    alignCenter:{
        textAlign: "center"
    },
    avatarStyle : {
        margin: 'auto',
        backgroundColor: 'green',
        color: 'white'
    }
  })
)

export default useStyles;