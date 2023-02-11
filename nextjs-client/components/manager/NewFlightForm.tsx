import { Button, Input, InputLabel } from "@mui/material";
import { useInput } from "../../hooks/useInput";

const NewFlightForm: React.FC<{
  onSubmit: (
    destination: string,
    passengers: string,
    departureYear: string,
    departureMonth: string,
    departureDay: string,
    departureHour: string,
    departureMinute: string,
    returnYear: string,
    returnMonth: string,
    returnDay: string,
    returnHour: string,
    returnMinute: string
  ) => {};
}> = (props) => {
  const validateFunc = (value: string) => value.trim().length !== 0;
  const destination = useInput(validateFunc);
  const passengers = useInput(validateFunc);

  const departureYear = useInput(validateFunc);
  const departureMonth = useInput(validateFunc);
  const departureDay = useInput(validateFunc);

  const departureHour = useInput(validateFunc);
  const departureMinute = useInput(validateFunc);

  const returnYear = useInput(validateFunc);
  const returnMonth = useInput(validateFunc);
  const returnDay = useInput(validateFunc);

  const returnHour = useInput(validateFunc);
  const returnMinute = useInput(validateFunc);

  let formIsValid =
    destination.isValid &&
    passengers.isValid &&
    departureYear.isValid &&
    departureMonth.isValid &&
    departureDay.isValid &&
    departureHour.isValid &&
    departureMinute.isValid &&
    returnYear.isValid &&
    returnMonth.isValid &&
    returnDay.isValid &&
    returnHour.isValid &&
    returnMinute.isValid;

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    if (!formIsValid) return;

    props.onSubmit(
      destination.value,
      passengers.value,
      departureYear.value,
      departureMonth.value,
      departureDay.value,
      departureHour.value,
      departureMinute.value,
      returnYear.value,
      returnMonth.value,
      returnDay.value,
      returnHour.value,
      returnMinute.value
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <h1>Registro Nuevo vuelo:</h1>
      <InputLabel htmlFor="destination">Destino:</InputLabel>
      <Input
        id="destination"
        type="text"
        value={destination.value}
        onChange={destination.changeHandler}
      />
      <InputLabel htmlFor="passengers">Pasajeros:</InputLabel>
      <Input
        id="passengers"
        type="number"
        value={passengers.value}
        onChange={passengers.changeHandler}
      />
      <h4>Fecha de ida:</h4>
      <InputLabel htmlFor="departureDay">Día:</InputLabel>
      <Input
        id="departureDay"
        type="number"
        value={departureDay.value}
        onChange={departureDay.changeHandler}
      />
      <InputLabel htmlFor="departureMonth">Mes:</InputLabel>
      <Input
        id="departureMonth"
        type="number"
        value={departureMonth.value}
        onChange={departureMonth.changeHandler}
      />
      <InputLabel htmlFor="departureYear">Año:</InputLabel>
      <Input
        id="departureYear"
        type="number"
        value={departureYear.value}
        onChange={departureYear.changeHandler}
      />
      <InputLabel htmlFor="departureHour">Hora:</InputLabel>
      <Input
        id="departureHour"
        type="number"
        value={departureHour.value}
        onChange={departureHour.changeHandler}
      />
      <InputLabel htmlFor="departureMinute">Minute:</InputLabel>
      <Input
        id="departureMinute"
        type="number"
        value={departureMinute.value}
        onChange={departureMinute.changeHandler}
      />
      <h4>Fecha de vuelta:</h4>
      <InputLabel htmlFor="returnDay">Día:</InputLabel>
      <Input
        id="returnDay"
        type="number"
        value={returnDay.value}
        onChange={returnDay.changeHandler}
      />
      <InputLabel htmlFor="returnMonth">Mes:</InputLabel>
      <Input
        id="returnMonth"
        type="number"
        value={returnMonth.value}
        onChange={returnMonth.changeHandler}
      />
      <InputLabel htmlFor="returnYear">Año:</InputLabel>
      <Input
        id="returnYear"
        type="number"
        value={returnYear.value}
        onChange={returnYear.changeHandler}
      />
      <InputLabel htmlFor="returnHour">Hora:</InputLabel>
      <Input
        id="returnHour"
        type="number"
        value={returnHour.value}
        onChange={returnHour.changeHandler}
      />
      <InputLabel htmlFor="returnMinute">Hora:</InputLabel>
      <Input
        id="returnMinute"
        type="number"
        value={returnMinute.value}
        onChange={returnMinute.changeHandler}
      />
      <Button type="submit" disabled={!formIsValid}>
        Registrar nuevo vuelo
      </Button>
    </form>
  );
};

export default NewFlightForm;
