import {Typography }from '@material-ui/core';

const XTypography = (props:any) => {
    const {style,variant,component,title} = props;
    return (
        <>
            <Typography style={style} variant={variant} component={component}>
                {title}
            </Typography>
        </>
    )
}

export default XTypography;
