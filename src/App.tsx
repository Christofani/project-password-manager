import { useState } from 'react';
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';
import Button from './components/ButtonGo/Button';
import Validation from './components/ValidationPassword/Validation';
import Header from './components/Header/Header';
import Form from './components/Formulario/Form';
import FormResults from './components/FormResults/FormResults';
import './App.css';
import { FormValuesProps, FormValuesPropsWithId } from './types';
import Input from './components/Input/Input';

const initialFormValues = {
  name: '',
  login: '',
  senha: '',
  url: '',
};
function App() {
  const [hidePassword, setHidePassword] = useState(false);
  const [submit, setSubmit] = useState<FormValuesPropsWithId[] | FormValuesProps[]>([]);
  const [validate, setValidate] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [buttonRegister, setButtonRegister] = useState(false);
  // const [delete, setDelete] = useState();
  const { senha } = formValues;
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit([...submit, { ...formValues, id: nanoid() }]);
    console.log(submit);
    setButtonRegister(false);
    setFormValues(initialFormValues);
    setValidate(false);
    Swal.fire({
      icon: 'success',
      text: 'Serviço cadastrado com sucesso!',
      timer: 1500,
    });
  };

  const handleDelete = (itemId: string) => {
    setSubmit(submit.filter((serv) => (
      itemId !== serv.id
    )));
  };

  const handlePassword = () => {
    setHidePassword(!hidePassword);
  };

  // console.log(formValues);
  return (
    <div className="d-container">
      <Header />
      {
      buttonRegister
        ? (
          <section className="validation-container">
            <Form
              handleSubmit={ handleSubmit }
              handleChange={ (event) => handleChange(event) }
              handleClick={ handleClick }
              formValues={ formValues }
              disabled={ !validate }
              hidePassword={ hidePassword }
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
            classname="button-cadastrar-nova-senha"
        />
        }
      {
        Array.isArray(submit) && submit.length === 0
          ? <p className="parag">nenhuma senha cadastrada</p>
          : (
            <div className="form-result-div">
              <FormResults
                handleDelete={ handleDelete }
                submit={ Array.isArray(submit) ? submit : [submit] }
                hidePassword={ hidePassword }
              />
              <div className="form-check form-switch">
                <Input
                  id="flexSwitchCheckChecked"
                  label="Esconder senhas"
                  type="checkbox"
                  checked={ hidePassword }
                  handleChange={ handlePassword }
                  role="switch"
                  classname="form-check-input"
                />
              </div>
            </div>
          )
      }
    </div>
  );
}

export default App;
