import { Button, Input, InputLabel } from "@mui/material";
import React from "react";
import { useInput } from "../../hooks/useInput";

const NewCustomerForm: React.FC<{
  onSubmit: (
    idCardNumber: string,
    fullName: string,
    phoneNumber: string,
    year: string,
    month: string,
    day: string
  ) => void;
}> = (props) => {
  const validateFunc = (value: string) => value.trim().length !== 0;
  const idCardNumber = useInput(validateFunc);
  const fullName = useInput(validateFunc);
  const phoneNumber = useInput(validateFunc);

  const year = useInput(validateFunc);
  const month = useInput(validateFunc);
  const day = useInput(validateFunc);

  let formIsValid =
    idCardNumber.isValid &&
    fullName.isValid &&
    phoneNumber.isValid &&
    year.isValid &&
    month.isValid &&
    day.isValid;

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    if (!formIsValid) return;

    props.onSubmit(
      idCardNumber.value,
      fullName.value,
      phoneNumber.value,
      year.value,
      month.value,
      day.value
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <h1>Registro Nuevo cliente:</h1>
      <InputLabel htmlFor="idCardNumber">Número de Cédula:</InputLabel>
      <Input
        id="idCardNumber"
        type="number"
        value={idCardNumber.value}
        onChange={idCardNumber.changeHandler}
      />
      <InputLabel htmlFor="fullName">Nombre completo:</InputLabel>
      <Input
        id="fullName"
        type="text"
        value={fullName.value}
        onChange={fullName.changeHandler}
      />
      <InputLabel htmlFor="phoneNumber">Teléfono:</InputLabel>
      <Input
        id="phoneNumber"
        type="text"
        value={phoneNumber.value}
        onChange={phoneNumber.changeHandler}
      />
      <InputLabel htmlFor="day">Día:</InputLabel>
      <Input
        id="day"
        type="number"
        value={day.value}
        onChange={day.changeHandler}
      />
      <InputLabel htmlFor="month">Mes:</InputLabel>
      <Input
        id="month"
        type="number"
        value={month.value}
        onChange={month.changeHandler}
      />
      <InputLabel htmlFor="year">Año:</InputLabel>
      <Input
        id="year"
        type="number"
        value={year.value}
        onChange={year.changeHandler}
      />
      <Button type="submit" disabled={!formIsValid}>
        Registrar nuevo cliente
      </Button>
    </form>
  );
};

export default NewCustomerForm;
