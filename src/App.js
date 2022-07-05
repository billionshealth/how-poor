import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Slider from '@mui/material/Slider';


function App() {
  const [sliderLocation, setSliderLocation] = useState(0);
  const valuetext = 0;

  // TODO: add conditional mapping based on slider value

  return (
    <div className="App">
      <header className="App-header">
        <p>
          How much of your net worth was in crypto?
        </p>

        <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
          <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />

      </header>
    </div>
  );
}

export default App;
