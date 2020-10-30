import React,{useEffect} from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import '../css/main.css';
import '../css/content.css';
import { Route} from 'react-router-dom';
import Home from './home';
import Chart from './chart';
import Table from './table';
import Rental from './rental';
import Reservation from './reservation';


function Main(){
useEffect(()=>{
    document.body.style.backgroundColor = '#F8F9FC';

})
return <div className="main">
<Sidebar />


<div className="content">
<Navbar />

<div style={{margin:"20px 10px 0px"}}>

     <Route exact={true} path="/" component={Home} />
     <Route  path="/Home" component={Home} />
     <Route  path="/Users" component={Table} />
     <Route  path="/Rental" component={Rental} />
     <Route  path="/Reservation" component={Reservation} />
 </div>
</div>
</div>

}
export default Main;