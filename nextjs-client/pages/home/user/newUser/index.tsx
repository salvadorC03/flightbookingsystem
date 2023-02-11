import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import UserRegisterForm from "../../../../components/UserRegisterForm";
import { handleError } from "../../../../handleError";
import { useLoading } from "../../../../hooks/useLoading";

const NewUserPage: React.FC = () => {
  const loadingState = useLoading();

  useEffect(loadingState.cleanup, [loadingState.message]);

  const registerHandler = async (
    fullname: string,
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
    role: string
  ) => {
    loadingState.setMessage(null);
    loadingState.setIsLoading(true);
    try {
      if (confirmPassword !== password)
        throw new Error("Las contraseñas no coinciden");

      const response = await fetch(
        "http://localhost:8080/api/v1/auth/register",
        {
          method: "POST",
          body: JSON.stringify({
            fullname,
            email,
            username,
            password,
            role,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      loadingState.setMessage(<p>Usuario registrado exitosamente.</p>);
    } catch (error) {
      handleError(error, (message: string) => {
        loadingState.setMessage(<p>{message}</p>);
      });
    }
    loadingState.setIsLoading(false);
  };

  return (
    <div>
      <UserRegisterForm
        isLoading={loadingState.isLoading}
        onRegister={registerHandler}
      />
      {loadingState.isLoading && <CircularProgress />}
      {loadingState.message && <div>{loadingState.message}</div>}
    </div>
  );
};

export default NewUserPage;
