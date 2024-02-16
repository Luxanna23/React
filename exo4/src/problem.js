import React, { useState } from 'react';

function CharacterCounter() {
    const [text,setText] = useState(0);

    function handleInputCount(event) {
        setText(event.target.value);
    }
  return (
    <div>
      <textarea value={text} onChange={(handleInputCount)}/>
      <p>Character count: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;