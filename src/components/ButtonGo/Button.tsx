import './Button.css';

type ButtonProps = {
  handleClick: () => void;
  text: string;
  disabled?: boolean;
};

function Button({ handleClick, text, disabled = false }: ButtonProps) {
  return (
    <button
      onClick={ handleClick }
      className="button-go"
      disabled={ disabled }
    >
      { text }

    </button>
  );
}

export default Button;
