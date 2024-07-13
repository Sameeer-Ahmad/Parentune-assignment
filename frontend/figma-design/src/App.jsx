import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parentune from './component/Parentune'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Parentune/>
    </>
  )
}

export default App
