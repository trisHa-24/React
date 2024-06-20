import { useState } from "react";

function App() {

  const [counter , setCounter] = useState(15);

   const addValue = () => {
      if(counter < 20){
        counter = counter+1;
        setCounter(counter);
        setCounter(counter+1); // it wont change the value of the counter, react send similar works in batches and update states onece-> if we want to again change the counter we follow this method ->
        setCounter((prevCounter)=> prevCounter+1); // it allows a call back and prevCounter is inbuild prop which fetches current values of counter state and then update it

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
