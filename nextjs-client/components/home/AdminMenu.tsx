import Link from "next/link";
import CapturistMenu from "./CapturistMenu";
import ManagerMenu from "./ManagerMenu";
import UserPicture from "../../public/user.png";
import Image from "next/image";

const AdminMenu = () => {
  return (
    <div>
      <CapturistMenu />
      <ManagerMenu />
      <div>
        <Link href="/home/user">
          <Image src={UserPicture} alt="Usuarios" width={100} height={100} />
        </Link>
      </div>
    </div>
  );
};

export default AdminMenu;
