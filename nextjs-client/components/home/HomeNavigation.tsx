import { useContext } from "react";
import { Context } from "../../store/context";
import AdminMenu from "./AdminMenu";
import CapturistMenu from "./CapturistMenu";
import ManagerMenu from "./ManagerMenu";

const HomeNavigation: React.FC = () => {
  const role = useContext(Context).user?.role;

  return (
    <>
      {role === "CAPTURIST" && <CapturistMenu />}
      {role === "MANAGER" && <ManagerMenu />}
      {role === "ADMIN" && <AdminMenu />}
    </>
  );
};

export default HomeNavigation;
