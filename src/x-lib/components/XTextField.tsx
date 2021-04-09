import {TextField }from '@material-ui/core';
const XTextField = (props:any) => {
    const {onChange,value,label,placeholder,fullWidth,required} = props;
    return (
        <>
            <TextField 
                onChange={onChange }
                value={value}
                label={label}
                placeholder={placeholder}
                fullWidth ={fullWidth}
                required={required}/> 
        </>
    )
}

export default XTextField;
