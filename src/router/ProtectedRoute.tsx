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
                  return( <Redirect to={{pathname:"/" ,state:{from: props.location} }}/>)
                }
            }
        }
      />
    );

  }

  /* 
  import {Redirect, Route} from 'react-router-dom';
import {_authenticated} from '../services/LoginService';
export const ProtectedRoute = (props:any) => {
  const { component:Component, ...rest } = props;
    return (

      <Route
        {...rest}
        render={
            (props:any)=>{
                if(!_authenticated){
                  return( <Redirect to={ {pathname:"/" ,state:{from: props.location} } }/>)
                }
                else {
                  return <Component {...props} />
                }
            
            }
        }
      />
    );

  } */