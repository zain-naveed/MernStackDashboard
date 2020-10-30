import React, { useEffect,useState } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import { toast, ToastContainer, Flip,Bounce,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../redux/action/userAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import image1 from '../2YourDock_logo.png'
import '../css/login.css';
function Login(props) {
    const [name, setName] = useState('');;
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    useEffect(()=>{
    // handleSubmit()
    document.body.backgroundImage = 'url("../Bellagio sailing tours.jpg")'
    },[dispatch]) 
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUser(name, password)).then(res =>
            // console.log(res)
            res.payload.token ? <div>{toast.dark("Login Succesfull")}
            
            </div> : toast.error("Login failed")

        )



    }
   

    return <div className="image">
    
    
    <Container fluid={true} style={{ height: 100 + 'vh',  }}  className="d-flex align-items-center justify-content-center">
        
        <Row style={{ width: 30 + 'rem' }}>
            <Col>
                <Card>
                    {/* <Card.Header >
                       
                /Card.Header> */}
                    <Card.Body>
                        <div className="text-center">
                    <img src={image1} height="150" width="250" />
                    </div>
                        <form onSubmit={handleSubmit}>
                            <Card.Text >User Name</Card.Text>
                            <input type="text" className="form-control" defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder="Enter User Name" />
                            <Card.Text className="mt-2">User Password</Card.Text>
                            <input type="password" className="form-control" defaultValue={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter User Password" />
                            <Button className="mt-2" type="submit"><Card.Text>Login</Card.Text></Button>
                            <br />
                            <br />
                            <Card.Text> If you don't have an account!! <Link to="/signup">Register</Link></Card.Text>
                        </form>
                    </Card.Body>
                </Card>


            </Col>

        </Row>
        {/* toast container use hota jaha toast use kia leakin main ny esy app1 or index.js main lga ya es wja sy main es ki functionality jaha merzi access kr skta ho */}
                {/* <ToastContainer
            transition={Zoom}
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover /> */}
    </Container>
    </div>
}
export default Login;