import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isChecked, setIsChecked] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  console.log(isChecked);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor, color: 'white' }}
        disabled={isChecked}
        onClick={() => {
          setButtonColor(newButtonColor);
        }}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      />
    </div>
  );
}

export default App;
