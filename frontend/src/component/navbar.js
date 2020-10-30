import React from 'react';
import '../css/nav.css';
import {Navbar,NavDropdown,Container} from 'react-bootstrap';
import {faUser,faCog} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector,useDispatch} from 'react-redux';
import {logoutUser} from '../redux/action/userAction';
import jwt from 'jsonwebtoken';
function BarNav(){
  const dispatch = useDispatch();
const dn = jwt.decode(localStorage.jwtToken);
  const handleClick = ()=>{
    dispatch(logoutUser())
  }
return <>

 <Navbar className="nav">
 <Container fluid={true}>
   <Navbar.Toggle />
   <Navbar.Collapse className="justify-content-end">
     <Navbar.Text>
       Signed in: 
       
     </Navbar.Text>
     
     <NavDropdown title={
       <Navbar.Text style={{width: 5.5+'rem'}}>

       {
       dn && dn.username
       }
     </Navbar.Text>
     } id="collasible-nav-dropdown">
        <NavDropdown.Item onClick={handleClick}><Navbar.Text >
          <FontAwesomeIcon icon={faUser} style={{fontSize:"20px"}} ></FontAwesomeIcon>  Logout</Navbar.Text>
          </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1"><Navbar.Text>
          <FontAwesomeIcon icon={faCog} style={{fontSize:"20px"}}></FontAwesomeIcon>  Setting</Navbar.Text>
          </NavDropdown.Item>
      </NavDropdown>
   </Navbar.Collapse>
   </Container>
 </Navbar>

</>
}
export default BarNav;