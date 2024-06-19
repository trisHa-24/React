
import './App.css'
import Card from './components/Card'
function App() {
   let myObj = {
      name: "Trisha",
      age: 22
   }
   let newArr = [1,2,3,4];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Trisha" btnText = "click me"/>
      <Card username="Tris" />

    </>
  )
}

export default App
