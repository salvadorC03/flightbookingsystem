import { Button } from "@mui/material";
import Link from "next/link";

const UserPage: React.FC = () => {
  return (
    <div>
      <div>
        <Link href="/home/user/newUser">
          <Button>Registrar nuevo usuario</Button>
        </Link>
      </div>
      <div>
        <Link href="/home/user/viewUsers">
          <Button>Ver usuarios</Button>
        </Link>
      </div>
    </div>
  );
};

export default UserPage;
