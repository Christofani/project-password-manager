import './index.css';

function Form() {
  return (
    <div className="div-container">
      <form className="form-container">
        <label>
          Nome do serviço
          <input type="text" />
        </label>
        <label>
          Login
          <input type="text" />
        </label>
        <label>
          Senha
          <input type="password" />
        </label>
        <label>
          URL
          <input type="text" />
        </label>
      </form>
      <section className="section-container">
        <button className="button-cadastrar">Cadastrar</button>
        <button className="button-cancelar">Cancelar</button>
      </section>
    </div>
  );
}

export default Form;
