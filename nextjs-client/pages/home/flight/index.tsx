import { Button } from "@mui/material";
import Link from "next/link";

const FlightPage: React.FC = () => {
  return (
    <div>
      <div>
        <Link href="/home/flight/newFlight">
          <Button>Registrar nuevo vuelo</Button>
        </Link>
      </div>
      <div>
        <Link href="/home/flight/viewFlights">
          <Button>Ver vuelos</Button>
        </Link>
      </div>
    </div>
  );
};

export default FlightPage;
