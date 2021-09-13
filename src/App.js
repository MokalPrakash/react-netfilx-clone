import {BrowserRouter as Router,Switch} from 'react-router-dom'
import {Home,Browse,SignIn,SignUp} from './Pages/index'
import * as ROUTES from './constants/routes'
import {IsUserRedirect,ProtectedRoute}from './helpers/routes'
import {useAuthListener} from './hooks'



function App() {
  const {user }= useAuthListener()
  //console.log(user)
  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.HOME} path={ROUTES.HOME} exact>
          <Home/>
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE} >
          <Browse/>
        </ProtectedRoute>

          <IsUserRedirect 
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path = {ROUTES.SIGN_IN}
         
          >
            <SignIn/>
          </IsUserRedirect>
          

          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
          >
            <SignUp/>
          </IsUserRedirect>
          
      </Switch>
    </Router>
  );
}

export default App;
