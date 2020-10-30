import axios from 'axios';
import {USER_GET, USER_LOGIN,USER_SIGNUP,USER_CURRENT,USER_LOGOUT} from '../type/user';
import jwt from 'jsonwebtoken';
// --------------------- get All User --------------------------
const getUser = ()=> dispatch =>{

var OPTIONS = {
    url: "http://localhost:5000/",
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }
  
  axios(OPTIONS).then(res=>{
    // console.log(res.data)
    dispatch({
      type:USER_GET,
      payload:res.data
  })
  }
     
      )
  .catch(err=>console.log(err));
}

// ---------------------  Signup User --------------------------
const signupUser = (name,email,password)=>dispatch=>{
  console.log({name,email,password})
  var OPTIONS = {
    url: "http://localhost:5000/" ,
    method: "POST",
    data:{
      name:name,
      email:email,
      password:password
    },
    headers: {
      "content-type": "application/json"
    }
  }
  return axios(OPTIONS).then(res=>{
   return dispatch({
      type:USER_SIGNUP,
      payload:res.data
    })
  })
}

// --------------------- Login User --------------------------
const loginUser = (na,pass)=>  (dispatch)=>{

  var OPTIONS = {
    url: "http://localhost:5000/login" ,
    method: "POST",
    data:{
      name:na,
      password:pass
    },
    headers: {
      "content-type": "application/json"
    }
  }
return axios(OPTIONS).then(res=>{
  if(res.data == 'User Not found!!'){
    return dispatch({
      type:USER_LOGIN,
      payload:res.data,
      login:false
    })
  }else{
  const token = res.data.token;
  localStorage.setItem("jwtToken",token)
  console.log(jwt.decode(token))
  currentUser(jwt.decode(token))
      return dispatch({
        type:USER_LOGIN,
        payload:res.data,
        login: true
      })
    }

  }).catch(err=>console.log(err))
}

const currentUser = (user)=>dispatch=>{
dispatch({
  type:USER_CURRENT,
  payload:user
})

}
// --------------------- Logout User --------------------------
const logoutUser = ()=>dispatch=>{
  localStorage.removeItem('jwtToken');
  dispatch(currentUser({}));
  dispatch({
    type:USER_LOGOUT
  })
  window.location.href = '/';
}

export {getUser,loginUser,signupUser,currentUser,logoutUser};