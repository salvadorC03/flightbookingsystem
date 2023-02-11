import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useInput } from "../hooks/useInput";
import React, { useRef } from "react";

const UserRegisterForm: React.FC<{
  onRegister: (
    fullname: string,
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
    role: string
  ) => void;
  isLoading: boolean;
}> = (props) => {
  const validateFunc = (value: String) => value.trim().length !== 0;
  const fullname = useInput(validateFunc);
  const email = useInput(
    (value) => validateFunc(value) && value.trim().includes("@")
  );
  const username = useInput(validateFunc);
  const password = useInput(validateFunc);
  const confirmPassword = useInput(validateFunc);
  const role = useRef<HTMLSelectElement>(null);

  let formIsValid =
    fullname.isValid && email.isValid && username.isValid && password.isValid;

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    if (!formIsValid) return;
    props.onRegister(
      fullname.value,
      email.value,
      username.value,
      password.value,
      confirmPassword.value,
      role.current?.value as string
    );
  }

  if (props.isLoading) return null;

  return (
    <form onSubmit={submitHandler}>
      <InputLabel htmlFor="fullname">Nombre y apellido:</InputLabel>
      <Input
        value={fullname.value}
        onChange={fullname.changeHandler}
        id="fullname"
        type="text"
      />
      <InputLabel htmlFor="email">Correo electrónico:</InputLabel>
      <Input
        value={email.value}
        onChange={email.changeHandler}
        id="email"
        type="text"
      />
      <InputLabel htmlFor="fullname">Nombre de usuario:</InputLabel>
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
      <InputLabel htmlFor="confirmPassword">Confirmar Contraseña:</InputLabel>
      <Input
        value={confirmPassword.value}
        onChange={confirmPassword.changeHandler}
        id="confirmPassword"
        type="password"
      />
      <InputLabel htmlFor="role">Rol:</InputLabel>
      <select id="role" ref={role} defaultValue="0">
        <option value="CAPTURIST">Capturista</option>
        <option value="MANAGER">Gestor</option>
        <option value="ADMIN">Administrador</option>
      </select>
      {!props.isLoading && (
        <Button disabled={!formIsValid} type="submit">
          Crear usuario
        </Button>
      )}
    </form>
  );
};

export default UserRegisterForm;
