
import React, { useState } from 'react';

function Counter() {

    const [num, setNum] = useState(0);

    function incr() {
        setNum(num + 1)
    }

    function dec() {
        setNum(num - 1)
    }

  return (
    <div>
        <button onClick={() =>  setNum(num + 1)}>
            Incremeter
        </button>
        <button onClick={dec}>
            Incremeter
        </button>
        <p> {num}</p>
    </div>
  );
}

export default Counter;