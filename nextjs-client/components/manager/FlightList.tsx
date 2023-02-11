import { Table, TableBody, TableHead } from "@mui/material";
import { Flight } from "../../store/types";
import FlightItem from "./FlightItem";

const FlightList: React.FC<{ flightList: Array<Flight> }> = ({
  flightList,
}) => {
  return (
    <Table border={1}>
      <TableHead>
        <tr>
          <th>ID</th>
          <th>Destino</th>
          <th>Pasajeros</th>
          <th>Fecha de ida</th>
          <th>Hora de vuelta</th>
          <th>Fecha de vuelta</th>
          <th>Hora de vuelta</th>
        </tr>
      </TableHead>
      <TableBody>
        {flightList.map((flight) => (
          <FlightItem key={flight.id} flight={flight} />
        ))}
      </TableBody>
    </Table>
  );
};

export default FlightList;
