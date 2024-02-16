import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      <h1>
         Hello World <br /> A little Redux Project. YaaY!
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>

      <h2>For Logged in users only</h2>
      <p>Log in activate my action</p>
      <button onClick={() => setAuth(true)}>Login</button>
      <button onClick={() => setAuth(false)}>Logout</button>
      {auth ? (
        <div>
          <p>
            Success
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;