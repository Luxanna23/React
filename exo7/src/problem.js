
import React, { useState } from 'react';

const items = ['Apple', 'Banana', 'Carrot', 'Date', 'Eggplant', 'Fig', 'Grape'];

function SearchFilter() {
    const [text,setText] = useState('');

    function handleInputChange(event) {
        setText(event.target.value);
    }

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(text.toLowerCase())
    );

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <ul>
            { filteredItems.map((item, id) => (
                <li key={id}>
                {item} </li>
            ))
            }
          </ul>
    </div>
  );
}

export default SearchFilter;
