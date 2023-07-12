import { useState } from 'react';
import Button from './components/ButtonGo/Button';
import Header from './components/Header/Header';
import Form from './components/Formulario/Form';
import './App.css';

const initialFormValues = {
  name: '',
  login: '',
  senha: '',
  url: '',
};

function App() {
  const [validate, setValidade] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [buttonRegister, setButtonRegister] = useState(false);
  const handleClick = () => {
    setButtonRegister(!buttonRegister);
  };
  const enableButton = () => {
    const { senha } = formValues;

    const hasValidLength = senha.length >= 8 && senha.length <= 16;
    const hasNumbers = /[0-9]/.test(senha);
    const hasLetters = /[a-zA-Z]/.test(senha);
    const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

    return (
      Object.values(formValues).every((value) => value !== '')
      && hasValidLength
      && hasNumbers
      && hasLetters
      && hasSpecialCharacters
    );
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
    if (enableButton()) {
      setValidade(true);
    } else {
      setValidade(false);
    }
  };

  console.log(formValues);
  return (
    <div className="d-container">
      <Header />
      {
      buttonRegister
        ? <Form
            handleChange={ (event) => handleChange(event) }
            handleClick={ handleClick }
            formValues={ formValues }
            disabled={ !validate }
        />
        : <Button
            text="Cadastrar Nova Senha"
            handleClick={ handleClick }
        />
        }
    </div>
  );
}

export default App;
