import { CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import FlightList from "../../../../components/manager/FlightList";
import { handleError } from "../../../../handleError";
import { useLoading } from "../../../../hooks/useLoading";
import { Context } from "../../../../store/context";
import { Flight } from "../../../../store/types";

const ViewFlightsPage: React.FC = () => {
  const token = useContext(Context).user?.token.value;
  const [flightList, setFlightList] = useState<null | Array<Flight>>(null);
  const [hasError, setHasError] = useState(false);
  const loadingState = useLoading();

  useEffect(() => {
    async function fetchFlights() {
      loadingState.setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/flight", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        setFlightList(data.resultList);
      } catch (error) {
        handleError(error, (message) => {
          loadingState.setMessage(<p>{message}</p>);
          setHasError(true);
        });
      }
      loadingState.setIsLoading(false);
    }
    fetchFlights();
  }, []);

  return (
    <div>
      {flightList && !hasError && <FlightList flightList={flightList} />}
      {loadingState.isLoading && <CircularProgress />}
      {!flightList && hasError && <p>{loadingState.message}</p>}
    </div>
  );
};

export default ViewFlightsPage;
