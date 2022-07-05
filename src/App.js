import './App.css';
import { useState } from 'react';
import Slider from '@mui/material/Slider';


function App() {

  const [value, setValue] = useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const message0 = "🤣 Sit back and smile at the misery of all your crypto bros";
  const message10 = "😁 Your very mild risk taking must be making you feel pretty dope right now";
  const message20 = "😜 You got out pretty okay, didnt ya?";
  const message30 = "😀 Eh, hope you got some good profile pics along the way";
  const message40 = "🙄 There goes the kids' college fund...";
  const message50 = "🤠 Well, there's always vegas";
  const message60 = "😨 Hope you didn't leave that day job";
  const message70 = "😥 You wanted that Lambo, didn't ya? Hope you like noodles";
  const message80 = "💩 Ouch, you should call your nearest McDonald's before the vacancies fill out";
  const message90 = "🥵 Damn, you're hella broke! Just facts";
  const message100 = "💀 RIP. Move in with your parents";


  return (
    <div className="Container">
          <h1>
            How poor am I today?
          </h1>

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
