import { useState } from 'react';
import Button from './components/ButtonGo';
import Header from './components/Header';
import Form from './components/Formulario';
import './App.css';

function App() {
  const [buttonRegister, setButtonRegister] = useState(false);
  const handleClick = () => {
    setButtonRegister(!buttonRegister);
  };
  return (
    <div className="d-container">
      <Header />
      {buttonRegister ? <Form handleClick={ handleClick } />
        : <Button text="Cadastrar Nova Senha" handleClick={ handleClick } />}
    </div>
  );
}

export default App;
