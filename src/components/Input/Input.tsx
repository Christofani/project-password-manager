export type InputProps = {
  label: string;
  id: string;
  type: string;
  value?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
};

function Input({
  label, id, type, value = undefined, handleChange, checked = undefined,
}: InputProps) {
  return (
    <label htmlFor={ id }>
      { label }
      <input
        className="form-control form-control-sm"
        id={ id }
        type={ type }
        value={ value }
        onChange={ handleChange }
        checked={ checked }
      />
    </label>
  );
}

export default Input;
