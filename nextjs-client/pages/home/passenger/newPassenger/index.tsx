import { CircularProgress } from "@mui/material";
import { useContext, useEffect } from "react";
import NewPassengerForm from "../../../../components/manager/NewPassengerForm";
import { handleError } from "../../../../handleError";
import { useLoading } from "../../../../hooks/useLoading";
import { Context } from "../../../../store/context";

const NewPassengerPage: React.FC = () => {
  const token = useContext(Context).user?.token.value;
  const loadingState = useLoading();

  useEffect(loadingState.cleanup, [loadingState.message]);

  async function addPassengerHandler(flightId: string, customerId: string) {
    loadingState.setMessage(null);
    loadingState.setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/v1/passenger", {
        method: "POST",
        body: JSON.stringify({
          customerId,
          flightId,
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
      console.log(data);
      loadingState.setMessage(<p>Pasajero registrado exitosamente</p>);
    } catch (error) {
      handleError(error, (message) =>
        loadingState.setMessage(<p>{message}</p>)
      );
    }
    loadingState.setIsLoading(false);
  }

  return (
    <div>
      <NewPassengerForm onSubmit={addPassengerHandler} />
      {loadingState.isLoading && <CircularProgress />}
      {loadingState.message && <div>{loadingState.message}</div>}
    </div>
  );
};

export default NewPassengerPage;
