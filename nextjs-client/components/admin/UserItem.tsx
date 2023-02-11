import { DisplayUser } from "../../store/types";

const UserItem : React.FC<{user : DisplayUser}> = ({user}) => {
    return (<tr>
        <td>{user.id}</td>
        <td>{user.fullName}</td>
        <td>{user.email}</td>
        <td>{user.username}</td>
        <td>{user.role}</td>
    </tr>)
};

export default UserItem;