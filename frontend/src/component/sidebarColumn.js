import React,{useEffect} from 'react';
 import '../css/sidebarCol.css';  
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {Link} from 'react-router-dom';
function SidebarColumn({icon,text,Dashboard,home,users,rental,setting}){

    return <div className="sideColumn">

   
 {
     Dashboard && <Link to={`/`} > <FontAwesomeIcon icon={icon} className="active" />
 <h4>{text}</h4>

  </Link> 
  ||
 home && <Link to={`/`} > <FontAwesomeIcon icon={icon} className="active" /> 
 <h4>{text}</h4>
 </Link>
||
 users && <Link to={`/${users}`} > <FontAwesomeIcon icon={icon} className="active" /> 
<h4>{text}</h4>
</Link>
 ||
 rental && <Link to={`/${rental}`} > <FontAwesomeIcon icon={icon} className="active" /> 
<h4>{text}</h4>
</Link>
||
setting && <Link to={`/${setting}`} > <FontAwesomeIcon icon={icon} className="active" /> 
<h4>{text}</h4>
</Link>
 
 }

<hr />
<hr />

    </div>
}
export default SidebarColumn;