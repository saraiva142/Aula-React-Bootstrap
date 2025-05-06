import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from 'bootstrap'
import './components/menu'
import Menu from './components/menu'
import Card from './components/card'
import Buttons from './components/buttons/button'


function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <>
      <Menu />
      
      <button className="btn btn-primary">Saraiva React</button>

      <Buttons variant = "btn btn-primary" valor="Incluir" />
      <Buttons variant = "btn btn-danger" valor="Excluir" />
      <Buttons variant = "btn btn-dark" valor="Clique aqui" acao={handleClick} />
      
    </>
  )
}

export default App
