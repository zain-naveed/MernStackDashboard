import React from 'react';
import {Button,Form,Row,Col,Container,Card, FormControl} from 'react-bootstrap';
import Table from '../component/table';

function AddUser(){
    
   
return<Container className="d-flex justify-content-center">
<Card style={{width:'50rem'}} className="p-4" >
<Form>
  
<FormCompontent name="FirstName" type="text" placeholder="First Name" />
<FormCompontent name="LastName" type="text" placeholder="Last Name" />
<FormCompontent name="Email" type="email" placeholder="Email" />
<FormCompontent name="Password" type="password" placeholder="Password" />
<FormCompontent name="D.O.B" type="date" />
<FormCompontent name="Option" option="option" />
  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" className="px-4">Add</Button>
    </Col>
  </Form.Group> 
</Form>

</Card>
</Container>
}
const FormCompontent = ({name,type,placeholder,option})=>{
    return<>
    <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      {
          name && name
      }
    </Form.Label>
    <Col sm={10}>
    {
        type &&  <Form.Control type={type} placeholder={
         placeholder
        } /> || 
        option && <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom
      >
        <option value="0">Select</option>
        <option value="1">Active</option>
        <option value="2">Inactive</option>
      </Form.Control>
        
    } 
    </Col>
  </Form.Group>
    
    </>
}
export default AddUser;