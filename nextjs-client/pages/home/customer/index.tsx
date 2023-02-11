import { Button } from "@mui/material";
import Link from "next/link";

const CustomerPage: React.FC = () => {
  return (
    <div>
      <div>
        <Link href="/home/customer/newCustomer">
          <Button>Registrar nuevo cliente</Button>
        </Link>
      </div>
      <div>
        <Link href="/home/customer/viewCustomers">
          <Button>Ver clientes</Button>
        </Link>
      </div>
    </div>
  );
};

export default CustomerPage;
