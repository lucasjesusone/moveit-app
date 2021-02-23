
import { useState } from 'react'




function App() {
  const [ counter, SetCounter] = useState(1)

  function increment() {
  SetCounter(counter + 1 )
}


  return (
   <button
   onClick={increment}
   style={{backgroundColor: 'blue'}}
   >
     Incremente
     <span>{counter}</span>
   </button> 
  );
}

export default App;
