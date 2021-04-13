import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import SignIn from './pages/sign-in/Sign-in';
import CitizenDetails from './pages/master-page/citizen/citizen-details/CitizenDetails';
import AllCitizens from './pages/master-page/citizen/all-citizen/AllCitizens';
import {ProtectedRoute} from './router/ProtectedRoute';
import Home from './testComponents/Home';



function App() {
  return (
    <BrowserRouter>
         <Switch>
            <Redirect exact from="/" to="/signin" />
            <Route exact path="/signin" component={SignIn}/>
            <ProtectedRoute exact path='/home' component={Home} />
            <ProtectedRoute exact path="/citizen" component={AllCitizens}/>
            <ProtectedRoute exact path="/citizen/:id" component={CitizenDetails}/>
            <Redirect to="/" />
         </Switch>        
    </BrowserRouter>
  );
}

export default App;

