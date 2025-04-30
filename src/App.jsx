import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from 'bootstrap'
import './components/menu'
import Menu from './components/menu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <button className="btn btn-primary">Bootstrap Button</button>
    </>
  )
}

export default App
