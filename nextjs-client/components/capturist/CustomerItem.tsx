import { Customer } from "../../store/types";

const CustomerItem: React.FC<{ customer: Customer }> = ({ customer }) => {
  return (
    <tr>
      <td>{customer.idCardNumber}</td>
      <td>{customer.fullName}</td>
      <td>{customer.phoneNumber}</td>
      <td>{customer.birthDate}</td>
    </tr>
  );
};

export default CustomerItem;
