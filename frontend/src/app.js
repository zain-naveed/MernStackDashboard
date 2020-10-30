import React,{useEffect} from 'react';
import Main from './component/main';
import Error from './component/error';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import App1 from './app1';
import {currentUser} from './redux/action/userAction';

function App(){
    console.log("app")
if(localStorage.jwtToken){
    jwt.verify(localStorage.jwtToken,'Some Secret',function(err,decode){
        if(err){
            // store.dispatch()
        }else{
            // console.log(decode)
            store.dispatch(currentUser(decode))
        }
    })
}
return (

<Router>

    
<App1 />

 </Router>
 
)
}
export default App;