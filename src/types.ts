export type FormValuesProps = {
  name: string;
  login: string;
  senha: string;
  url: string;
  id : string
};
export type FormValuesPropsWithId = FormValuesProps & { id : string };
