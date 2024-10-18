import { useState } from 'react'
import './App.css'
import Profile from'./Profile'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
     <Profile name="Baba" descrip="Hola Mundo"/>
     <Profile name="alberto" descrip="No data"/>
     <Profile name="B" descrip="lorem"/>
    </>
  )
}

export default App
