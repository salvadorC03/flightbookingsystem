import { useContext, useEffect, useState } from "react";
import CustomerList from "../../../../components/capturist/CustomerList";
import { handleError } from "../../../../handleError";
import { useLoading } from "../../../../hooks/useLoading";
import { Context } from "../../../../store/context";
import { Customer } from "../../../../store/types";

const ViewCustomersPage: React.FC = () => {
  const token = useContext(Context).user?.token.value;
  const [customerList, setCustomerList] = useState<null | Array<Customer>>(
    null
  );
  const [hasError, setHasError] = useState(false);
  const loadingState = useLoading();

  useEffect(() => {
    async function fetchCustomers() {
      loadingState.setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/customer", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        setCustomerList(data.resultList);
      } catch (error) {
        handleError(error, (message) => {
          loadingState.setMessage(<p>{message}</p>);
          setHasError(true);
        });
      }
      loadingState.setIsLoading(false);
    }
    fetchCustomers();
  }, []);

  return (
    <div>
      {customerList && !hasError && (
        <CustomerList customerList={customerList} />
      )}
      {loadingState.isLoading && <p>Cargando...</p>}
      {!customerList && hasError && <p>{loadingState.message}</p>}
    </div>
  );
};

export default ViewCustomersPage;
