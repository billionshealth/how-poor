import './App.css';
import { useState } from 'react';
import Slider from '@mui/material/Slider';


function App() {

  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const message0 = "Insert comment (0%)";
  const message10 = "Insert comment (10%)";
  const message20 = "Insert comment (20%)";
  const message30 = "Insert comment (30%)";
  const message40 = "Insert comment (40%)";
  const message50 = "Insert comment (50%)";
  const message60 = "Insert comment (60%)";
  const message70 = "Insert comment (70%)";
  const message80 = "Insert comment (80%)";
  const message90 = "Insert comment (90%)";
  const message100 = "Insert comment (100%)";


  return (
    <div className="App">
        <p>
          How much of your net worth was in crypto?
        </p>

        <div className="Slider-div">
            <Slider 
            aria-label="Temperature"
            value={value}
            valueLabelDisplay="auto"
            onChange={handleChange}
            step={10}
            marks
            min={0}
            max={100}
            className="Slider-element"
            />
        </div>

        {value === 0 && (<p>{message0}</p>)}
        {value === 10 && (<p>{message10}</p>)}
        {value === 20 && (<p>{message20}</p>)}
        {value === 30 && (<p>{message30}</p>)}
        {value === 40 && (<p>{message40}</p>)}
        {value === 50 && (<p>{message50}</p>)}
        {value === 60 && (<p>{message60}</p>)}
        {value === 70 && (<p>{message70}</p>)}
        {value === 80 && (<p>{message80}</p>)}
        {value === 90 && (<p>{message90}</p>)}
        {value === 100 && (<p>{message100}</p>)}

    </div>
  );
}

export default App;
