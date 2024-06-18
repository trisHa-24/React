import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
      <div>
        <h1>Custom App !</h1>
      </div>
    )
}

//behind the scene every function converted into this structure -> (customReact for more info)
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement =  (
  <a href="https://google.com" target='_blank'>Visit google</a>

)


const anotherUser = "variable injected "

const reactElement = React.createElement(
    'a',{href: 'https://google.com', target:'_blank'},
    'click me to visit google',
    anotherUser
)
//babble injects createElement
ReactDOM.createRoot(document.getElementById('root')).render(
   //<MyApp/> // MyApp() will also work cause it's a function , behind the scence vite bundler compile the code and modify the code in correct react format
   // anotherElement
    reactElement

   //<App/>
)
