import React from 'react';
import {Button,Form,Row,Col,Container,Card, FormControl} from 'react-bootstrap';

function AddBoat(){
   const handleClick = ()=>{
       console.log("handle click trigger")
   } 
   
return<Container className="d-flex justify-content-center">
<Card style={{width:'50rem'}} className="p-4" >
<Form>
  
<FormCompontent name="Language" type="text" language="English" />
<FormCompontent name="Listing Name" type="text" placeholder="Be clear and descriptive" />
<FormCompontent name="Summary" textarea="textarea" placeholder="Tell renters what you love about the boat. You can include details about the boat, the amenities it includes, and the areas." />
<FormCompontent name="Boat" textarea="textarea" />
<FormCompontent name="Renter Access" textarea="textarea" />
<FormCompontent name="Interaction with Passengers" textarea="textarea" />
<FormCompontent name="Other things to Note" textarea="textarea" />
<FormCompontent name="Boat Rules" textarea="textarea" />
<FormCompontent name="Overview" textarea="textarea" />
<FormCompontent name="Getting Around" textarea="textarea" />
<FormCompontent button="button" handle={handleClick} />

</Form>

</Card>
</Container>
}
const FormCompontent = ({name,type,placeholder,textarea,language,button,handle})=>{
    return<>
    <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
      {
          name && name
      }
    </Form.Label>
    <Col sm={9}>
    {
       language && type &&  <Form.Control type={type}   disabled={language && language

        } defaultValue="English" /> ||
         type &&  <Form.Control type={type}   placeholder={placeholder} /> ||
         textarea && <Form.Control as="textarea" placeholder={placeholder} rows={5} />||
         button &&   button && <div className="d-flex justify-content-end">
         <Button type="submit" className="px-4" onClick={handle}>Next</Button>
         </div>
        
        
    } 

    
    </Col>
  </Form.Group>
    
    </>
}
export default AddBoat;