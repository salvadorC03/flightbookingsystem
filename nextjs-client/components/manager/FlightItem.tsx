import { Flight } from "../../store/types";

const CustomerItem: React.FC<{ flight: Flight }> = ({ flight }) => {
  return (
    <tr>
      <td>{flight.id}</td>
      <td>{flight.destination}</td>
      <td>{flight.passengers}</td>
      <td>{flight.departureDate}</td>
      <td>{flight.departureTime}</td>
      <td>{flight.returnDate}</td>
      <td>{flight.returnTime}</td>
    </tr>
  );
};

export default CustomerItem;
