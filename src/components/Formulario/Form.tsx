import React, { useState } from 'react';
import Button from '../ButtonGo/Button';
import Input from '../Input/Input';

import './Form.css';

type FormValuesProps = {
  name: string;
  login: string;
  senha: string,
  url: string;
};
type FormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleClick: (event: React.MouseEvent) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formValues: FormValuesProps;
  disabled: boolean;
  hidePassword: boolean;
};

function Form(
  { handleClick,
    handleChange,
    formValues,
    disabled = false,
    handleSubmit,
    hidePassword }: FormProps,
) {
  const [showPassword, setShowPassword] = useState(hidePassword);
  const { name, login, senha, url } = formValues;

  const handleShowPass = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowPassword(!showPassword);
    console.log(showPassword);
  };

  return (
    <div className="div-container">
      <form onSubmit={ handleSubmit } className="form-container">
        <Input
          id="name"
          label="Nome do Serviço"
          type="text"
          value={ name }
          handleChange={ (event) => handleChange(event) }
        />
        <Input
          id="login"
          label="Login"
          type="text"
          handleChange={ (event) => handleChange(event) }
          value={ login }
        />
        <Input
          id="senha"
          label="Senha"
          type={ !showPassword ? 'password' : 'text' }
          handleChange={ (event) => handleChange(event) }
          value={ senha }
        />
        <Button
          handleClick={ (event) => handleShowPass(event) }
          hidePassword={ showPassword }
          datatestid="show-hide-form-password"
          text=""
        />
        <Input
          id="url"
          label="URL"
          type="text"
          handleChange={ (event) => handleChange(event) }
          value={ url }
        />
        <section className="section-container">
          <Button text="Cadastrar" disabled={ disabled } />
        </section>
      </form>
      <Button text="Cancelar" handleClick={ handleClick } />
    </div>
  );
}

export default Form;
