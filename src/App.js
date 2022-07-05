import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Slider from '@mui/material/Slider';


function App() {

  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(newValue)
  };

  // TODO: add conditional mapping based on slider value

  return (
    <div className="App">
        <p>
          How much of your net worth was in crypto?
        </p>

        <Slider 
        aria-label="Temperature"
        value={value}
        valueLabelDisplay="auto"
        onChange={handleChange}
        step={10}
        marks
        min={0}
        max={100}
        />

    </div>
  );
}

export default App;
