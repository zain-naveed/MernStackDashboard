import React,{useState} from 'react';
import { Container, Row, Col, Card ,FormControl, Button,Form} from 'react-bootstrap';
import {toast,ToastContainer,Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {signupUser} from '../redux/action/userAction';

export default function Signup() {
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(signupUser(name,email,password)).then(res=>{
            res.payload.token ? toast.success("signup successful") : toast.error("signup error")

        })
    
        
    }
    return <Container>
        <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                            <Card.Title>Name</Card.Title>
                              <FormControl placeholder="Enter the  name" defaultValue={name} onChange={e=> setName(e.target.value)}></FormControl>                              
                            <Card.Title>Email</Card.Title>
                            <FormControl placeholder="info@gmail.com" defaultValue={email} onChange={e => setEmail(e.target.value)}></FormControl> 
                            <Card.Title>Password</Card.Title>
                            <FormControl type="password" placeholder="*******" defaultValue={password} onChange={e=> setPassword(e.target.value)}></FormControl> 
                            <br />
                            <Button type="submit" variant="danger"><FontAwesomeIcon style={{color:"white"}} icon={faPaperPlane}></FontAwesomeIcon></Button>
                            <br />
                            <br />
                            <Card.Text> If you have an account!! <Link to="/">Login</Link></Card.Text>
                            </Form>
                        </Card.Body>
                    </Card>
                
                </Col>
        </Row>
        <ToastContainer
            transition={Flip}
            autoClose={1500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover />
    </Container>
}