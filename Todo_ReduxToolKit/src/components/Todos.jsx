import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
   const todos =  useSelector(state => state.todos);
   const dispatch = useDispatch();

    return (
        <>
           <div className='text-center my-2 text-white text-2xl'> Todos </div>
           <ul className='p-10'>
             {todos.map((todo) => (
              <li key={todo.id}
                className='text-white text-lg list-none border-spacing-0  my-2 bg-gray-700 px-10  rounded-md '
              > 
               {todo.text} 
               <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className='p-4 text-red-700 text-2xl '
               >
                X
              </button>
            </li>
           ))}
          </ul>
        </>
    )
}

export default Todos
