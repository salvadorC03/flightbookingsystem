import { useContext, useEffect } from "react";
import { handleError } from "../../../../handleError";
import { useLoading } from "../../../../hooks/useLoading";
import { Context } from "../../../../store/context";
import NewFlightForm from "../../../../components/manager/NewFlightForm";
import { CircularProgress } from "@mui/material";

const NewFlightPage: React.FC = () => {
  const token = useContext(Context).user?.token.value;
  const loadingState = useLoading();

  useEffect(loadingState.cleanup, [loadingState.message]);

  async function addFlightHandler(
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
  ) {
    loadingState.setMessage(null);
    loadingState.setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/v1/flight", {
        method: "POST",
        body: JSON.stringify({
          destination,
          passengers,
          departureDate: `${departureYear}-${departureMonth}-${departureDay}`,
          departureTime: `${departureHour}:${departureMinute}:00`,
          returnDate: `${returnYear}-${returnMonth}-${returnDay}`,
          returnTime: `${returnHour}:${returnMinute}:00`,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      loadingState.setMessage(<p>Vuelo registrado exitosamente</p>);
    } catch (error) {
      handleError(error, (message) =>
        loadingState.setMessage(<p>{message}</p>)
      );
    }
    loadingState.setIsLoading(false);
  }

  return (
    <div>
      <NewFlightForm onSubmit={addFlightHandler} />
      {loadingState.isLoading && <CircularProgress />}
      {loadingState.message && <div>{loadingState.message}</div>}
    </div>
  );
};

export default NewFlightPage;
