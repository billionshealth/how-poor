import './App.css';
import { useState } from 'react';
import Slider from '@mui/material/Slider';


function App() {

  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

        {value === 0 && (
                <p>
                Insert comment here
              </p>
        )}

        {value === 10 && (
                <p>
                Insert comment here
              </p>
        )}

        {value === 20 && (
                <p>
                Insert comment here
              </p>
        )}

        {value === 30 && (
                <p>
                Insert comment here
              </p>
        )}

        {value === 40  && (
                <p>
                Insert comment here
              </p>
        )}

        {value === 50 && (
                <p>
                Insert comment here
              </p>
        )}

        {value === 60 && (
                <p>
                Insert comment here
              </p>
        )}

        {value === 70 && (
                <p>
                Insert comment here
              </p>
        )}

        {value === 80 && (
                <p>
                Insert comment here
              </p>
        )}

        {value === 90 && (
                <p>
                Insert comment here (90 percent!)
              </p>
        )}

        {value === 100 && (
                <p>
                This is where the text goes based on your amount.
              </p>
        )}

    </div>
  );
}

export default App;
