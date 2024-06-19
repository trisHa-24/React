import { useState } from "react";

function App() {

  let [counter , setCounter] = useState(15);

   const addValue = () => {
      if(counter < 20){
        counter = counter+1;
        setCounter(counter);
      } 
   }

   const removeValue = () => {
      if(counter > 0)setCounter(counter -1 );
   }
  //let counter = 5;
  
  // const addValue = () => {
  //   console.log("clicked ", counter);
  //   counter = counter+1;
    
  // }



  return (
    
    <>
      <h1> Counter project</h1>
      <h2>Counter value : {counter}</h2>
      <button 
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
