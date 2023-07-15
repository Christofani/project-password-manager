import { FormValuesPropsWithId } from '../../types';
import './FormResults.css';

type ResultProps = {
  submit: FormValuesPropsWithId[];
};

function FormResults({ submit }: ResultProps) {
  return (
    <div>
      {submit.map((item) => (
        <div className="div-form" key={ item.id }>
          <a href={ item.url }>{item.name}</a>
          <p>{item.login}</p>
          <p>{item.senha}</p>
        </div>
      ))}
    </div>
  );
}

export default FormResults;
