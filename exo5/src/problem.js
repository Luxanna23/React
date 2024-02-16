
    import React, { useState } from 'react';

    function TodoList() {
      const [text,setText] = useState('');
      const [list, setlist] = useState([]);
    
      function addItem(){
        setlist([...list,text]);
        setText('');
      }
    
      function handleInputChange(event) {
        setText(event.target.value);
      }

      
    function handleDelete(id) {
      setlist(list.filter((_, e) => e !== id));
  }
    
      return (
        <div>
          <input type="text" value={text} onChange={handleInputChange} />
          <button onClick={addItem}>Add Todo</button>
          <ul>
            {
              list.map((item, id) => (
                <li key={id} >
                  {item}  <button onClick={() =>handleDelete(id)}>Delete</button>
                </li>
              ))
            }
          </ul>
        </div>
      );
    }
    
    export default TodoList;