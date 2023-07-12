export type InputProps = {
  label: string;
  id: string;
  type: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, id, type, value, handleChange }: InputProps) {
  return (
    <label htmlFor={ id }>
      { label }
      <input
        className="form-control form-control-sm"
        id={ id }
        type={ type }
        value={ value }
        onChange={ handleChange }
      />
    </label>
  );
}

export default Input;
