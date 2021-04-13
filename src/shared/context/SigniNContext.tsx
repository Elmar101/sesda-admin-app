import React from 'react';

const Context = React.createContext({});

export const SignInContextProvider = (props:any) => {
    return (
       <Context.Provider value={{props}}>
           { props.children }
       </Context.Provider> 
    )
}


 const SignInContextConsumer = Context.Consumer;
 export default SignInContextConsumer;


