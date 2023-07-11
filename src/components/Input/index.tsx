type InputProps = {
  label: string;
  id: string;
  type: string
};

function Input({ label, id, type }: InputProps) {
  return (
    <label htmlFor={ id }>
      { label }
      <input
        id={ id }
        type={ type }
      />
    </label>
  );
}

export default Input;
