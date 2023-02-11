import { Table, TableBody, TableHead } from "@mui/material";
import { DisplayUser } from "../../store/types";
import UserItem from "./UserItem";

const UserList: React.FC<{ userList: Array<DisplayUser> }> = ({ userList }) => {
  console.log(userList);
  return (
    <Table border={1}>
      <TableHead>
        <tr>
          <th>ID</th>
          <th>Nombre completo</th>
          <th>Correo electrónico</th>
          <th>Nombre de usuario</th>
          <th>Rol</th>
        </tr>
      </TableHead>
      <TableBody>
        {userList.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </TableBody>
    </Table>
  );
};

export default UserList;
