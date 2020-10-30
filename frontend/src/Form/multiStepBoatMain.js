import React,{useState} from 'react';
import AddBoat from './boat';
import Boat1 from './boat1';

function MultiStepBoat(){
    const [value,setValue] = useState(1);
    const handleIndex = (index)=>{
            setValue(index)
    }
    switch(value){
        case 1:
            return <Boat1 handle={handleIndex} />;
        case 2:
            return <AddBoat />;
    }
}
export default MultiStepBoat;