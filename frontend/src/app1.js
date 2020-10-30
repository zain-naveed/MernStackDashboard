import React,{useEffect} from 'react';
import Main from './component/main';
import Error from './component/error';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './component/login';
import Signup from './component/signup';
import jwt from 'jsonwebtoken';
import {useSelector} from 'react-redux';
import { toast, ToastContainer, Flip,Bounce,Zoom } from 'react-toastify';

function App1(){
    const isLoggedIn = useSelector(state => state.User.login);
    console.log("app")
      
    if(isLoggedIn === false){
      var show = <>
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/signup" component={Signup} />
        </>
    }else{
       
         show=   <Main />
    }
    
return (

<Router>

    {
       show
    }

<ToastContainer
            transition={Bounce}
            autoClose={1200}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />
 </Router>
 
)
}
export default App1;