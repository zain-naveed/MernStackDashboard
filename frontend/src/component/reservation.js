import React,{useEffect,useState,Component} from 'react';
import {Container,Card, Row,Button} from 'react-bootstrap';
import '../css/home.css';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import DataTable from 'react-data-table-component';
import $ from 'jquery';
import {getUser} from '../redux/action/userAction';
import {useDispatch,useSelector} from 'react-redux';
import dt from 'datatables.net-dt/js/dataTables.dataTables';
import {faBasketballBall, faEdit, faSlash, faTrashAlt,faUserCheck, faUserAltSlash, faPlaneDeparture} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function Reservation(){
  const data = useSelector(state=>state.User)
  const {user} = data;

const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUser())
    },[]);
    

const columns = [
 
  {
    name: 'Name',
    selector: 'username',
    left: true,
    sortable: true
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    left: true,
    grow: 2
  },
  {
    name: 'Password',
    selector: 'password',
    sortable: true,
    left: true,
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
  cell: row => <div>{row.status ? "Active":"Block"}</div>,
  },
  {
    name: 'Action',
    sortable: false,
  cell: row => <span><Button variant="primary" onClick={(e)=>alert(row._id)}   style={{marginRight:'2px'}}><FontAwesomeIcon icon={faUserCheck} style={{color:'white',fontSize:'18px'}}  ></FontAwesomeIcon></Button>
  <Button variant="danger" onClick={(e)=>alert("hello world")}  ><FontAwesomeIcon icon={faTrashAlt} style={{color:'white',fontSize:'18px'}}  ></FontAwesomeIcon></Button></span>,
  },
];

    return <Container >
      
    <Card className="home" style={{padding:"40px 20px"}}>
    
      <Card.Body>
        
      
    {user && (<DataTable
        title="Reservation Details"
        columns={columns}
        data={user}
        highlightOnHover
        defaultSortField="name"
        // selectableRows
        pagination

      />)}
    </Card.Body>
    </Card>
    </Container>
    
}
export default Reservation;
