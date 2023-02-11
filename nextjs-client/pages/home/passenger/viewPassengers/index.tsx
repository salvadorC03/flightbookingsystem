import { CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import PassengerList from "../../../../components/manager/PassengerList";
import { handleError } from "../../../../handleError";
import { useLoading } from "../../../../hooks/useLoading";
import { Context } from "../../../../store/context";
import { Passenger } from "../../../../store/types";

const ViewPassengersPage: React.FC = () => {
  const token = useContext(Context).user?.token.value;
  const [passengerList, setPassengerList] = useState<null | Array<Passenger>>(
    null
  );
  const [hasError, setHasError] = useState(false);
  const loadingState = useLoading();

  useEffect(() => {
    async function fetchPassengers() {
      loadingState.setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/passenger", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        setPassengerList(data.resultList);
      } catch (error) {
        handleError(error, (message) => {
          loadingState.setMessage(<p>{message}</p>);
          setHasError(true);
        });
      }
      loadingState.setIsLoading(false);
    }
    fetchPassengers();
  }, []);

  return (
    <div>
      {passengerList && !hasError && (
        <PassengerList passengerList={passengerList} />
      )}
      {loadingState.isLoading && <CircularProgress />}
      {!passengerList && hasError && <p>{loadingState.message}</p>}
    </div>
  );
};

export default ViewPassengersPage;
