import React from 'react';
import './Button.css';
import PasswordIcon from '../PasswordIcon/PasswordIcon';

type ButtonProps = {
  handleClick?: (event: React.MouseEvent) => void;
  text: string;
  disabled?: boolean;
  datatestid?: string;
  hidePassword?: boolean;
  classname?: string;
};

function Button({ handleClick = undefined,
  text, disabled = false,
  datatestid = undefined, hidePassword = false, classname = undefined }: ButtonProps) {
  return (
    <button
      data-testid={ datatestid }
      onClick={ handleClick }
      disabled={ disabled }
      className={ classname }
    >
      {text.length === 0
        ? <PasswordIcon hidePassword={ hidePassword } />
        : text}
    </button>
  );
}

export default Button;
