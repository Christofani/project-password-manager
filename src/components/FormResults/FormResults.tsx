import { FormValuesPropsWithId } from '../../types';
import Button from '../ButtonGo/Button';
import './FormResults.css';

type ResultProps = {
  submit: FormValuesPropsWithId[];
  handleDelete: (itemId: string) => void;
};

function FormResults({ submit, handleDelete }: ResultProps) {
  return (
    <div>
      {submit.map((item) => (
        <div className="div-form" key={ item.id }>
          <a target="_blank" href={ item.url } rel="noreferrer">{item.name}</a>
          <p>{item.login}</p>
          <p>{item.senha}</p>
          <Button
            datatestid="remove-btn"
            text="X"
            handleClick={ () => handleDelete(item.id) }
          />
        </div>
      ))}
    </div>
  );
}

export default FormResults;
