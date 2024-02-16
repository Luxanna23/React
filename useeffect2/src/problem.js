
import React, { useState, useEffect } from 'react';

const ValidatedInput = ({ validationFunction, errorMessage }) => {
    const [text,setText] = useState(0);

  return (
    <div>
      <input type="text" value={text} onChange={(handleInputChange)} />
      <p> {text} </p>
    </div>
  );
};

export default ValidatedInput;