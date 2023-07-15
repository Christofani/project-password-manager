import React from 'react';
import './Button.css';

type ButtonProps = {
  handleClick?: (event: React.MouseEvent) => void;
  text: string;
  disabled?: boolean;
  datatestid?: string;
};

function Button({ handleClick = undefined,
  text, disabled = false, datatestid = undefined }: ButtonProps) {
  return (
    <button
      data-testid={ datatestid }
      onClick={ handleClick }
      className="button-go"
      disabled={ disabled }
    >
      { text }

    </button>
  );
}

export default Button;
