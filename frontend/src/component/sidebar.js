import React from 'react';
import '../css/sidebar.css';
import SidebarColumn from './sidebarColumn';

import {faCogs, faTachometerAlt, faHome, faUsers, faChartArea, faBuilding, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons' 
function Sidebar(){
return <div className="sidebar">

<SidebarColumn icon={faTachometerAlt} text="Dashboard" Dashboard='Dashboard'/>
<SidebarColumn icon={faHome} text="Home" home='home' />
<SidebarColumn icon={faUsers} text="Users" users='users'/>
<SidebarColumn icon={faBuilding} text="Rental" rental='rental'/>
<SidebarColumn icon={faPlaneDeparture} text="Reservation" setting='Reservation'/>
</div>
}
export default Sidebar;