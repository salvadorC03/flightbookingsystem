import { Button } from "@mui/material";
import Link from "next/link";

const PassengerPage: React.FC = () => {
  return (
    <div>
      <div>
        <Link href="/home/passenger/newPassenger">
          <Button>Registrar nuevo pasajero</Button>
        </Link>
      </div>
      <div>
        <Link href="/home/passenger/viewPassengers">
          <Button>Ver pasajeros</Button>
        </Link>
      </div>
    </div>
  );
};

export default PassengerPage;
