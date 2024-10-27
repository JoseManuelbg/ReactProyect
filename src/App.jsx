import { useState } from 'react'
import './App.css'
import Profile from'./Profile'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
     <Profile name="Baba" email="josemanuelbabaciugheorghiu@gmail.com" descrip="Hola Mundo" img="/siuuu.webp" premium skills="java, js"/>
     <Profile name="alberto" email="a@gmail.com"  img="" skill={["css", "JavaScript"]}/>
     <Profile name="B" email="b@gmail.com" descrip="lorem" img=""/>
    </>
  )
}

export default App
