import {Redirect, Route} from 'react-router-dom';
export const ProtectedRoute = (props:any) => {
  const { component:Component, ...rest } = props;
    return (

      <Route
        {...rest}
        render={
            (props:any)=>{
                const token = sessionStorage.getItem('token');
                if(token){
                  return <Component {...props} />
                }
                else {
                  return( <Redirect to={ {pathname:"/" ,state:{from: props.location} } }/>)
                }
            
            }
        }
      />
    );

  }