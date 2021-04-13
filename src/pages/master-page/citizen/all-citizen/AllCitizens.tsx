/* import {BrowserRouter,Route,Switch,Redirect,Link,NavLink,useHistory,useLocation,useParams,useRouteMatch} from 'react-router-dom';
import {useEffect,useState} from 'react';
import Home from '../../../../testComponents/Home'; */
import { logOut } from '../../../../services/LoginService';
import {TreeService} from '../../../../services/TreeService';
const treeService = new TreeService();
const AllCitizens = (props:any) => {
    const onLogOut = () => {
        logOut();
    }
    const getAllTrees = () => {
        treeService.fetchOrganizationsTree(['']);
    }
    return (
        <>
        <button onClick={onLogOut}> Logout </button>
        <button onClick={getAllTrees}> getAllTrees </button>
        <h1>Citizen Seyfesi</h1>
       {/*  <BrowserRouter basename="/page">
            <NavLink exact to="/home"> Home </NavLink> | <br/>
            <NavLink exact to="/citizen/as12"> CitizenDetails </NavLink>  

            <Route exact path="/page/home" component={Home}/>  
        </BrowserRouter> */}
        </>
    )
}

export default AllCitizens;
