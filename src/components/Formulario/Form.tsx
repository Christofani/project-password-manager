import React from 'react';
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
  handleClick: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formValues: FormValuesProps;
  disabled: boolean;
};

function Form(
  { handleClick, handleChange, formValues, disabled = false, handleSubmit }: FormProps,
) {
  const { name, login, senha, url } = formValues;
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
          type="password"
          handleChange={ (event) => handleChange(event) }
          value={ senha }
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
          <Button text="Cancelar" handleClick={ handleClick } />
        </section>
      </form>
    </div>
  );
}

export default Form;
