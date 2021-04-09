import { styled, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


interface Props {
    buttonEnabl: boolean;
}

const XButton = styled(Button)<Theme, Props>(props => ({
  backgroundColor: props.buttonEnabl ? '#f3f3f3' : 'green',
  color: props.buttonEnabl ?  '#fff': 'black' ,
  marginTop: '10px', 
  padding:'10px', 
  float:'right',
}));

export default XButton;

