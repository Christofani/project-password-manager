export type InputProps = {
  label: string;
  id: string;
  type: string;
  value?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  role?:string
  classname?: string
};

function Input({
  label, id,
  classname = undefined,
  type, role = undefined, value = undefined, handleChange, checked = undefined,
}: InputProps) {
  return (
    <label htmlFor={ id }>
      { label }
      <input
        role={ role }
        className={ classname }
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
