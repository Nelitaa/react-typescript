import { useState } from "react";

export const Counter = () => {
  
  const [counter, setCounter] = useState(0);

  const increment = ( num:  number = 1 ):void => {
    setCounter( counter + num );
  }

  return (
    <div className="mt-5">
      <h3>Counter: useState</h3>
      <span>Value: { counter }</span>
      <br/>
      <button
        onClick={ () => increment() }
        className="btn btn-outline-primary m-2">
        +1
      </button>
      <button
        onClick={ () => increment(2) }
        className="btn btn-outline-primary m-2">
        +2
      </button>
      <button
        onClick={ () => setCounter(0) }
        className="btn btn-outline-danger m-2">
        Reset
      </button>
    </div>
  )
}
