
import React, { useState } from 'react';

function ColorSwitcher() {

    const colors = ["red","blue","yellow","green"];
    const [currentColor, setColor] = useState('white');

    function handleChange(event) {
        setColor(event.target.value);
    }

  return (
    <div>
      <select onChange={handleChange}>
        { colors.map((element, id) => (
            <option key={id} value={element}> {element} </option>
          ))}
      </select>
      <div style= {{backgroundColor: currentColor }}>
        Hello world
      </div>
    </div>
  );
}

export default ColorSwitcher;