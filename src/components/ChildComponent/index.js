import { useState } from 'react';

function ChildComponent(props) {
    const [inputText, setInputText] = useState('');
  
    const handleInputChange = (event) => {
      const newText = event.target.value;
      setInputText(newText);
      props.onInputChange(newText);      
    };
  
    return (
      <div className = "child"> 
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Введіть id персонажа"
      />
      </div>
    );
  }
  
  export default ChildComponent;