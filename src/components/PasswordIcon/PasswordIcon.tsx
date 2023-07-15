import React from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

type PasswordProps = {
  hidePassword: boolean;
};

function PasswordIcon({ hidePassword }: PasswordProps) {
  return (
    <span>
      { hidePassword
        ? <AiFillEyeInvisible />
        : <AiFillEye />}
    </span>
  );
}

export default PasswordIcon;
