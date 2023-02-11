import { useContext, useEffect } from "react";
import NewCustomerForm from "../../../../components/capturist/NewCustomerForm";
import { handleError } from "../../../../handleError";
import { useLoading } from "../../../../hooks/useLoading";
import { Context } from "../../../../store/context";

const NewCustomerPage: React.FC = () => {
  const loadingState = useLoading();
  const token = useContext(Context).user?.token.value;

  useEffect(loadingState.cleanup, [loadingState.message]);

  async function addCustomerHandler(
    idCardNumber: string,
    fullName: string,
    phoneNumber: string,
    year: string,
    month: string,
    day: string
  ) {
    loadingState.setMessage(null);
    loadingState.setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/v1/customer", {
        method: "POST",
        body: JSON.stringify({
          idCardNumber,
          fullName,
          phoneNumber,
          birthDate: `${year}-${month}-${day}`,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }
      loadingState.setMessage(<p>Cliente registrado exitosamente.</p>);
      console.log(data);
    } catch (error) {
      handleError(error, (message: string) => {
        loadingState.setMessage(<p>{message}</p>);
      });
    }
    loadingState.setIsLoading(false);
  }

  return (
    <div>
      <NewCustomerForm onSubmit={addCustomerHandler} />
      {loadingState.isLoading && <p>Cargando...</p>}
      {loadingState.message && <div>{loadingState.message}</div>}
    </div>
  );
};

export default NewCustomerPage;
