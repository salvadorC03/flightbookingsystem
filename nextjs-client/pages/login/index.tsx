import { Alert, Card, CircularProgress } from "@mui/material";
import { useContext, useEffect } from "react";
import UserLoginForm from "../../components/UserLoginForm";
import Head from "next/head";
import { Context } from "../../store/context";
import { useLoading } from "../../hooks/useLoading";
import { handleError } from "../../handleError";
import { Token, User } from "../../store/types";

import classes from "../../styles/Styles.module.css";

export default function Login() {
  const loadingState = useLoading();
  const context = useContext(Context);

  useEffect(loadingState.cleanup, [loadingState.message]);

  const loginHandler = async (username: string, password: string) => {
    loadingState.setMessage(null);
    loadingState.setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      const user: User = {
        fullName: data.userDetails.fullName as string,
        username: data.userDetails.username as string,
        role: data.userDetails.role as string,
        token: data.token as Token,
      };

      context.login(user);
    } catch (error) {
      handleError(error, (message: string) => {
        loadingState.setIsLoading(false);
        loadingState.setMessage(<Alert severity="error">{message}</Alert>);
      });
    }
  };

  return (
    <>
      <Head>
        <title>Sistema de control de vuelos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.centered}>
        <Card className={`${classes.card} ${classes["login-card"]} ${classes.group}`}>
          <header className={`${classes.centered} ${classes.header}`}>
            <h1>Iniciar sesi??n:</h1>
          </header>
          <UserLoginForm
            message={loadingState.message}
            isLoading={loadingState.isLoading}
            onLogin={loginHandler}
          />
          {loadingState.isLoading && (
            <div className={`${classes.centered} ${classes.progress}`}>
              <CircularProgress />
            </div>
          )}
        </Card>
      </main>
    </>
  );
}
