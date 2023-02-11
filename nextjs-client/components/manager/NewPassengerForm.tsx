import { Button, FormLabel, Input } from "@mui/material";
import React from "react";
import { useInput } from "../../hooks/useInput";

const NewPassengerForm: React.FC<{
  onSubmit: (flightId: string, customerId: string) => void;
}> = (props) => {
  const validateFunc = (value: string) => value.trim().length !== 0;

  const flightId = useInput(validateFunc);
  const customerId = useInput(validateFunc);

  let formIsValid = flightId.isValid && customerId.isValid;

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    if (!formIsValid) return;

    props.onSubmit(flightId.value, customerId.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <h1>Registro Nuevo pasajero:</h1>
      <FormLabel htmlFor="flightId">ID de vuelo:</FormLabel>
      <Input
        onChange={flightId.changeHandler}
        value={flightId.value}
        type="number"
        id="flightId"
      />
      <FormLabel htmlFor="customerId">ID del cliente:</FormLabel>
      <Input
        onChange={customerId.changeHandler}
        value={customerId.value}
        type="number"
        id="customerId"
      />
      <Button disabled={!formIsValid} type="submit">
        Registrar nuevo pasajero
      </Button>
    </form>
  );
};

export default NewPassengerForm;
