import React from 'react';
import {Col,Card,Row, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../css/home.css';
import '../css/homeclm.css';
import {Link} from 'react-router-dom';

function HomeCloumn({Total,icon,Block,Active,color,user}){
    return <Col >
    <Card style={{padding:"20px 0px", borderLeft:"5px solid", borderLeftColor:`${color}` }} className="home">
        <Card.Body style={{}}>
            <Row>
                <Col sm={9}>
                {
                    Total && <span style={{color:`${color}`}}><h5>{Total}</h5>
                   
                    4</span>
                    
                    ||
                    Active && <span style={{color:`${color}`}}><h5>{Active}</h5>5
                    </span>
                    ||
                    Block && <span style={{color:`${color}`}}><h5>{
                        Block
                    }</h5>6
                    </span>
                    
                }
                
                </Col>
                <Col sm={3}>
                {
                    Total && <FontAwesomeIcon icon={icon} style={{color:`${color}`}} />
                    ||
                    Block && <FontAwesomeIcon icon={icon} style={{color:`${color}`}} />
                    ||
                    Active && <FontAwesomeIcon icon={icon}style={{color:`${color}`}} />
                }
                </Col>
               
            </Row>
            {
                user && <Link to={`/${user}`}>  <div className="info" style={{backgroundColor:`${color}`, marginTop:'10px',borderRadius:'10px', padding:'2px 0px'}}>
                
                      <span style={{color:`white`}}>More Info</span>
                
                 </div>
                 </Link>
            }
           
        </Card.Body>
        
    </Card>
    
    </Col>
}
export default HomeCloumn;