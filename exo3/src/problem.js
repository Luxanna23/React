
import React from 'react';

function ToggleVisibility() {
    const [show, setShow] = useState(false);

    function handleshowHide(){
        setShow(!show);
    }
  return (
    <div>
      <button onClick={handleshowHide}>Show/Hide Text</button>
      {show && <p>Toggle me!</p>}
    </div>
  );
}

export default ToggleVisibility;