import React, { useState } from "react";

export const useInput = (validateFunc: (value: string) => boolean) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [hasError, setHasError] = useState(false);

  let isValid = isTouched && !hasError;

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setIsTouched(true);
    setHasError(!validateFunc(event.target.value));
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
    setHasError(false);
  };

  return { value, changeHandler, isValid, reset };
};
