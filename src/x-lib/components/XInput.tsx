import {Input,InputAdornment,IconButton,InputLabel }from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const XInput = (props:any) => {
    const {onChange,onClick,label,value,type,showPassword} = props;
    return (
        <>
            <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
            <Input
                onChange={onChange}
                value={value}
                fullWidth
                type={type ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton  onClick={onClick}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </>
    )
}

export default XInput;
