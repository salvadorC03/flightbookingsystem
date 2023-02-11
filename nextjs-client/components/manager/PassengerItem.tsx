import { Passenger } from "../../store/types";

const PassengerItem: React.FC<{ passenger: Passenger }> = ({ passenger }) => {
  return (
    <li>
      <p>Cédula de pasajero: {passenger.customer.idCardNumber}</p>
      <details>
        <p>Nombre completo: {passenger.customer.fullName}</p>
        <p>Número de teléfono: {passenger.customer.phoneNumber}</p>
        <p>Fecha de nacimiento: {passenger.customer.birthDate}</p>
      </details>
      <p>ID de vuelo: {passenger.flight.id}</p>
      <details>
        <p>Destino {passenger.flight.destination}</p>
        <p>Pasajeros: {passenger.flight.passengers}</p>
        <p>Fecha de ida: {passenger.flight.departureDate}</p>
        <p>Hora de ida: {passenger.flight.departureTime}</p>
        <p>Fecha de vuelta: {passenger.flight.returnDate}</p>
        <p>Hora de vuelta: {passenger.flight.returnTime}</p>
      </details>
    </li>
  );
};

export default PassengerItem;
