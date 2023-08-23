import { useState, useEffect } from 'react';

import axios from 'axios';

import Yellow from '../Yellow';
import Blue from '../Blue';
import ChildComponent from '../ChildComponent';

function Green() {

   const [name, setName] = useState();
   const [height, setHeight] = useState();
   const [mass, setMass] = useState();
   const [skin_color, setSkinColor] = useState();

   let id = '1';

    const getAxios = async () => {
        const res = await axios.get('https://swapi.dev/api/people/' + id + '/'); 
        if (res.data.name) {
            setName(res.data.name);         
            setHeight(res.data.height);  
            setMass(res.data.mass);  
            setSkinColor(res.data.skin_color); 
        }         
      }

      useEffect(() => {
        getAxios();
      }, []);
    

      const handleChildInputChange = (text) => {
        id = text;
        getAxios();
 
      };
    
    return (
        <div className="green">
           <Yellow 
              name = {name}
           />
           <Blue
              height = {height}
              mass = {mass}
              skin_color = {skin_color}
           />
           <ChildComponent  
               onInputChange={handleChildInputChange} 
           />
        </div>
    )
}
 
export default Green;