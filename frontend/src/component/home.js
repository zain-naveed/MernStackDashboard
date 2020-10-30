import React from 'react';
import {Row,Container,Col} from 'react-bootstrap';
import HomeCloumn from './homeCloumn';
import Table from './table';
import Chart from './chart';
import Calen from './calender';


import {faUserAltSlash,  faUserPlus, faUser, faBuilding, faPlane, faPlaneArrival, faPlaneDeparture} from '@fortawesome/free-solid-svg-icons';
function Home(){
    return <div>
        <Container fluid={true}>
        <Row> 
            <Col sm={4}> 
        <HomeCloumn Total="Registered Users" icon={faUserPlus} color="#4E73DF" user="Users"   />
        </Col>
        <Col sm={4}>
        <HomeCloumn Block="Total Rentals" icon={faBuilding} color="#1CC88A" user="Rental"  />
        </Col>
        <Col sm={4}>
        <HomeCloumn Active="Total Reservations" icon={faPlaneDeparture}  color="#F6C23E" user="Reservation" />
</Col>
</Row>
<Row style={{marginTop:'15px'}}>
<Col sm={4}>
<HomeCloumn Active="Totday Users" icon={faUserPlus}  color="#4E73DF" user="Users" />
</Col>
<Col sm={4}>
<HomeCloumn Active="Today Rentals" icon={faBuilding}  color="#1CC88A" user="Rental" />
</Col>
<Col sm={4}>
<HomeCloumn Active="Today Reservations" icon={faPlaneDeparture}  color="#F6C23E" user="Reservation" />
</Col>
        </Row>
        <Row style={{marginTop:'40px'}}>
            <Col>
                    {/* <Table value={200} /> */}
                    <Calen />
            </Col> 
            <Col >
                    <Chart height={456} />
                    {/* <Graph /> */}
            </Col>
        </Row>
        </Container>
    </div>
}
export default Home;