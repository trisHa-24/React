import { useState } from 'react'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'


function App() {


  return (
    <>
     <h1 className='text-center my-10 text-white text-2xl'>Redux-Toolkit</h1>
     <AddTodos />
     <Todos />
    </>
  )
}

export default App
