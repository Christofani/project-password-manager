import React from 'react';

type ValidProp = {
  validacao: boolean;
  conteudo: string;
};

function Validation({ validacao, conteudo }: ValidProp) {
  return (
    <p
      className={ validacao
        ? 'valid-password-check' : 'invalid-password-check' }
    >
      {conteudo}
    </p>
  );
}

export default Validation;
