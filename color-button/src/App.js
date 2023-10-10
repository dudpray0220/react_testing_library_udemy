import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  console.log(disabled);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor, color: 'white' }}
        disabled={disabled}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onClick={(e) => {
          setDisabled(e.target.checked);
        }}
      />
    </div>
  );
}

export default App;
