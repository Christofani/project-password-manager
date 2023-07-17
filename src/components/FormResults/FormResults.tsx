import { FormValuesPropsWithId } from '../../types';
import Button from '../ButtonGo/Button';
import './FormResults.css';

type ResultProps = {
  submit: FormValuesPropsWithId[];
  handleDelete: (itemId: string) => void;
  hidePassword: boolean;
};

function FormResults({ submit, handleDelete, hidePassword }: ResultProps) {
  return (
    <div>
      {submit.map((item) => (
        <div className="div-form" key={ item.id }>
          <section className="section-button-x">
            <a target="_blank" href={ item.url } rel="noreferrer">{item.name}</a>
            <Button
              classname="btn-x"
              datatestid="remove-btn"
              text="X"
              handleClick={ () => handleDelete(item.id) }
            />
          </section>
          <p>{item.login}</p>
          <p>
            { hidePassword
              ? '******'
              : item.senha}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FormResults;
