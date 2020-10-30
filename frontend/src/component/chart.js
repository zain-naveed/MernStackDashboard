import React,{useEffect,useState} from 'react';
import {Bar,Line} from 'react-chartjs-2';
import {Row,Col, Container, Card,Button} from 'react-bootstrap';
import '../css/home.css';
import MultiStepBoat from '../Form/multiStepBoatMain';
function Chart({height}){
    const [ndaa,getData] = useState({});
    const [add,setAdd] = useState(true);
    useEffect(()=>{
        getData( {
                labels:['Lahore','Islamabad','Karachi','Faislabad','Multan'],
                datasets:[{
                    label:'Population',
                    data:[
                        400,
                        323,
                        652,
                        550,
                        100
                    ],
                backgroundColor:[
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(255,99,132,0.6)'
                ]
                }]
            }
        
        )
    },[])
    // style={{height:'63ch', display: 'flex', alignItems:'center'}}
    const handleChange = ()=>{
        add ? setAdd(false) : setAdd(true)
   }
    return <Container >
    <Card className="home" style={{padding:'20px ',}}>
   {
       !height && <Card.Header  className="d-flex justify-content-end">
       <Button variant="success px-4" onClick={handleChange} >
         {
           add ? 'Back': "Add Boat"
         }
 
       </Button>
       
       </Card.Header>
   } 
     <div >   
  {
      add ? <Line
      data={ndaa}
      // options={{
      // }}
      /> :  <MultiStepBoat />
  }  
  </div>
    </Card>
    </Container>
  
}
export default Chart;