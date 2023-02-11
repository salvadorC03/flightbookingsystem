import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import FlightPicture from "../../public/plane.png";
import PassengerPicture from "../../public/passenger.png"

const ManagerMenu: React.FC = () => {
  return (
    <div>
      <div>
        <Link href="/home/flight">
          <Image src={FlightPicture} alt="Vuelos" width={100} height={100} />
        </Link>
      </div>
      <div>
        <Link href="/home/passenger">
          <Image src={PassengerPicture} alt="Pasajeros" width={100} height={100} />
        </Link>
      </div>
    </div>
  );
};

export default ManagerMenu;
