import { Passenger } from "../../store/types";
import PassengerItem from "./PassengerItem";

const PassengerList: React.FC<{ passengerList: Array<Passenger> }> = ({
  passengerList,
}) => {
  return (
    <ul>
      {passengerList.map((passenger) => (
        <PassengerItem key={passenger.id} passenger={passenger} />
      ))}
    </ul>
  );
};

export default PassengerList;
