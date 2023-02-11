import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useInput } from "../hooks/useInput";

import classes from "../styles/Styles.module.css";

const UserLoginForm: React.FC<{
  onLogin: (username: string, password: string) => void;
  isLoading: boolean;
  message: JSX.Element | null;
}> = (props) => {
  const username = useInput((value) => value.trim().length !== 0);
  const password = useInput((value) => value.trim().length !== 0);
  let formIsValid = username.isValid && password.isValid;

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    if (!formIsValid) return;
    props.onLogin(username.value, password.value);
  }

  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <InputLabel htmlFor="username">Nombre de usuario:</InputLabel>
      <Input
        value={username.value}
        onChange={username.changeHandler}
        id="username"
        type="text"
      />
      <InputLabel htmlFor="password">Contraseña:</InputLabel>
      <Input
        value={password.value}
        onChange={password.changeHandler}
        id="password"
        type="password"
      />
      {props.message && (
        <div className={`${classes.alert} ${classes.centered}`}>
          {props.message}
        </div>
      )}
      {!props.isLoading && (
        <div className={classes.centered}>
          <Button disabled={!formIsValid} type="submit">
            Iniciar sesión
          </Button>
        </div>
      )}
    </form>
  );
};

export default UserLoginForm;
