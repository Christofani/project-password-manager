type ButtonProps = {
  handleClick: () => void;
  text: string;
};

function Button({ handleClick, text }: ButtonProps) {
  return (
    <button onClick={ handleClick } className="button-go">{ text }</button>
  );
}

export default Button;
