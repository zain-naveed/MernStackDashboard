import React from 'react';
import {Form,Row,Col,Container,Card,Button,InputGroup,FormControl} from 'react-bootstrap';
function Boat1({handle}){
    const handleClick = (e)=>{
        e.preventDefault();
        // console.log("handle Click trigger")
        return handle(2);
    }

    var boarMake = ['select','AMF Alcort','Abbott Boats','Bertram','Boston Whaler','Grady-White'];
    var Model = ['select','1600 Super Taihiti','1650 Super Taihiti'];
    var fuel = ['select','diesel','petrol','gas'];
    var year = ['select','2000','2001','2002','2003','2004','2005'];
    var mate = ['select','carbon','wood','aluminium'];
    var num = ['select','1','2','3','4','5'];
    var pay = ['select','renter pays','owner pays'];
    var room = ['select','1','2','3','4','5','6','7+'];
    var type = ['select','1','2','3','none'];
    var enType = ['inbound','outbound'];
    return <>
    <Container className="d-flex justify-content-center">
<Card style={{width:'50rem'}} className="p-4" >
<Form>
  
<FormCompontent name="Boat Type" option="option" dat={['select','Power','Sail']} />
<FormCompontent name="Boat Category" option="option" dat={['select','airboat','Aluminum fishing','Bass Boat']} />
<FormCompontent name="Boat Make" option="option" dat={boarMake} />
<FormCompontent name="Boat Model" option="option" dat={Model} />
<FormCompontent name="Fuel Type" option="option" dat={fuel} />
<FormCompontent name="Boat Year" option="option" dat={year} />
<FormCompontent name="Hull Material" option="option" dat={mate} />
<FormCompontent name="Activities" checkbox="checkbox" />
<FormCompontent name="Passenger Capacity" option="option" dat={num} />
<FormCompontent name="Fuel Policy" option="option" dat={pay} />
<FormCompontent name="Fuel Capacity" span="gal." form="text"  />
<FormCompontent name="Fuel Consumption" span="GPH" form="text"  />
<FormCompontent name="Num of Rooms" option="option" dat={room} />
<FormCompontent name="Sleeps" option="option" dat={room} />
<FormCompontent name="Length" span="ft." form="text"  />
<FormCompontent name="Draft" span="ft." form="text"  />
<FormCompontent name="Number of Engine" option="option" dat={type} />
<FormCompontent name="Engine Type" option="option" dat={enType} />
<FormCompontent name="Engine Year" option="option" dat={year} />
<FormCompontent name="Top Speed" span="MPH" form="text"  />
<FormCompontent name="HorsePower" span="HP" form="text"  />

<FormCompontent button="button" handle={handleClick} />

  
</Form>

</Card>
</Container>
    </>
}
const FormCompontent = ({name,type,placeholder,option,button,handle,checkbox,form,span,dat})=>{
    console.log(dat)
    return<>
    <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
      {
          name && name
      }
    </Form.Label>
    <Col sm={9}>
    {
        type &&  <Form.Control type={type} placeholder={
         placeholder
        } /> || 
        option && <Form.Control
        as="select"
        className="mr-sm-2"
        id="inlineFormCustomSelect"
        custom>
         {
          dat &&  dat.map((result)=>{
        return  <option value={result}>{result}</option>
             })
         }
      </Form.Control> ||
      checkbox && <Row>
          <Col>
          <Form.Check  label="Fishing" style={{fontWeight:'600'}} />
          <Form.Check  label="Sailing" style={{fontWeight:'600'}}/>
          <Form.Check  label="Cruising" style={{fontWeight:'600'}}/>
          <Form.Check  label="Trailriding" style={{fontWeight:'600'}}/>
          </Col>
          <Col>
          <Form.Check  label="Celebrating" style={{fontWeight:'600'}} />
          <Form.Check  label="Watersports" style={{fontWeight:'600'}} />
          <Form.Check  label="Weddings" style={{fontWeight:'600'}} />
          </Col>
      </Row>||
      form && <InputGroup className="mb-2">
    <FormControl id="inlineFormInputGroup" />
      <InputGroup.Prepend>
    <InputGroup.Text>{span}</InputGroup.Text>
      </InputGroup.Prepend>
      
    </InputGroup> ||

      button && <div className="d-flex justify-content-end">
       <Button type="submit" className="px-4" onClick={handle}>Next</Button>
       </div>
        
    } 
    </Col>
  </Form.Group>
    
    </>
}
export default Boat1;