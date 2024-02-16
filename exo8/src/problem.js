
import React from 'react';

const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

function DragDropList() {
  return (
    <div>
      <ul>
        { initialItems.map((item, id) => (
            <li>
            {item} </li>
        ))
        }
      </ul>
    </div>
  );
}

export default DragDropList;