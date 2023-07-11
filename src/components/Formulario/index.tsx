import Button from '../ButtonGo';
import Input from '../Input';
import './index.css';

type FormProps = {
  handleClick: () => void;
};

function Form({ handleClick }: FormProps) {
  return (
    <div className="div-container">
      <form className="form-container">
        <Input
          id="name"
          label="Nome do Serviço"
          type="text"
        />
        <Input
          id="login"
          label="Login"
          type="text"
        />
        <Input
          id="senha"
          label="Senha"
          type="password"
        />
        <Input
          id="url"
          label="URL"
          type="text"
        />
      </form>
      <section className="section-container">
        <Button text="Cadastrar" handleClick={ handleClick } />
        <Button text="Cancelar" handleClick={ handleClick } />
      </section>
    </div>
  );
}

export default Form;
