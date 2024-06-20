import { useState, useCallback } from "react"

function App() {
   const [length, setLength] = useState(8);
   const [isNum , setIsNum] = useState(false);
   const [isChar, setIsChar] = useState(false);
   const [password, setPassword] = useState("");

   const passwordGenerator = useCallback(() => {
       let pass = "";
       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
       if(isNum) str += "0123456789";
       if(isChar) str += "@#_$!&";

       for (let i = 1; i <= length; i++) {
         let charInd = Math.floor(Math.random() * str.length + 1);
         pass = str.charAt(charInd);
        
       }

       setPassword(pass);

   }, [length, isNum, isChar, setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto text-orange-500 bg-gray-500 shadow-md rounded-lg px-4 my-8">
        <h1 className="text-white text-center my-2">Password Generator</h1>
            <div className="flex shadow rounded-lg mb-8 overflow-hidden ">
              <input 
                type="text"
                value={password} 
                className="outline-none w-full py-1 px-3"
                placeholder="password"
                readOnly
              />
              <button 
                className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0"
              >copy</button>
            </div>
            <div className="flex text-sm gap-x-2">
                 <div className="flex items-center gap-x-1">
                  <input 
                    type="range" 
                    min={6}
                    max={50}
                    value={length}
                    className="cursor-pointer"
                    onChange={(e) => {setLength(e.target.value)}}
                  />
                  <label> Length: {length} </label>
                 </div>
                 <div className="flex items-center gap-x-1">
                 <input 
                    type="checkbox" 
                    defaultChecked={isNum}
                    id="numberInput"
                    onChange={() => {
                      setIsNum((prev)=> !prev);
                    }}
                  />
                  <label htmlFor="numberInput"> Number </label>
                 </div>
                 <div className="flex items-center gap-x-1">
                 <input 
                    type="checkbox" 
                    defaultChecked={isChar}
                    id="charInput"
                    onChange={() => {
                      setIsChar((prev)=> !prev);
                    }}
                  />
                  <label htmlFor="charInput"> Charecters </label>
                 </div>
            </div>
      </div>
    </>
  )
}

export default App
