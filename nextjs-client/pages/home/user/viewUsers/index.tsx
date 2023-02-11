import { CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import UserList from "../../../../components/admin/UserList";
import PassengerList from "../../../../components/manager/PassengerList";
import { handleError } from "../../../../handleError";
import { useLoading } from "../../../../hooks/useLoading";
import { Context } from "../../../../store/context";
import { DisplayUser } from "../../../../store/types";

const ViewUsersPage: React.FC = () => {
  const token = useContext(Context).user?.token.value;
  const [userList, setUserList] = useState<null | Array<DisplayUser>>(null);
  const [hasError, setHasError] = useState(false);
  const loadingState = useLoading();

  useEffect(() => {
    async function fetchUsers() {
      loadingState.setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/auth", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        setUserList(data.resultList);
      } catch (error) {
        handleError(error, (message) => {
          loadingState.setMessage(<p>{message}</p>);
          setHasError(true);
        });
      }
      loadingState.setIsLoading(false);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      {userList && !hasError && <UserList userList={userList} />}
      {loadingState.isLoading && <CircularProgress />}
      {!userList && hasError && <p>{loadingState.message}</p>}
    </div>
  );
};

export default ViewUsersPage;
