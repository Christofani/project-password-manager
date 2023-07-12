import { useState } from 'react';
import Button from './components/ButtonGo/Button';
import Validation from './components/ValidationPassword/Validation';
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
  const [validate, setValidate] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [buttonRegister, setButtonRegister] = useState(false);
  const { name, login, senha, url } = formValues;
  const handleClick = () => {
    setButtonRegister(!buttonRegister);
  };
  const hasValidLength = senha.length >= 8 && senha.length <= 16;
  const hasNumbers = /[0-9]/.test(senha);
  const hasLetters = /[a-zA-Z]/.test(senha);
  const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
  const enableButton = () => {
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
      setValidate(true);
    } else {
      setValidate(false);
    }
  };

  console.log(formValues);
  return (
    <div className="d-container">
      <Header />
      {
      buttonRegister
        ? (
          <section className="validation-container">
            <Form
              handleChange={ (event) => handleChange(event) }
              handleClick={ handleClick }
              formValues={ formValues }
              disabled={ !validate }
            />
            <section className="child-container">
              <Validation
                validacao={ senha.length >= 8 }
                conteudo="Possuir 8 ou mais caracteres"
              />
              <Validation
                validacao={ senha.length <= 16 }
                conteudo="Possuir até 16 caracteres"
              />
              <Validation
                validacao={ (hasNumbers && hasLetters) }
                conteudo="Possuir letras e números"
              />
              <Validation
                validacao={ hasSpecialCharacters }
                conteudo="Possuir algum caractere especial"
              />
            </section>
          </section>
        )
        : <Button
            text="Cadastrar Nova Senha"
            handleClick={ handleClick }
        />
        }

    </div>
  );
}

export default App;
