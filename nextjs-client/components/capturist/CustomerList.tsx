import { Table, TableBody, TableHead } from "@mui/material";
import { Customer } from "../../store/types";
import CustomerItem from "./CustomerItem";

const CustomerList: React.FC<{ customerList: Array<Customer> }> = ({
  customerList,
}) => {
  return (
    <Table border={1}>
      <TableHead>
        <tr>
          <th>Número de cédula</th>
          <th>Nombre completo</th>
          <th>Número de teléfono</th>
          <th>Fecha de nacimiento</th>
        </tr>
      </TableHead>
      <TableBody>
        {customerList.map((customer) => (
          <CustomerItem key={customer.idCardNumber} customer={customer} />
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomerList;
