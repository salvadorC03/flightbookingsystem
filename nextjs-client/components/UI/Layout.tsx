import { Card, CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../store/context";
import Navigation from "./Navigation";

import classes from "../../styles/Styles.module.css";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { isLoggedIn, initializing } = useContext(Context);

  if (initializing)
    return (
      <div className={`${classes.centered} ${classes.progress}`}>
        <CircularProgress />
      </div>
    );

  if (!isLoggedIn) return <div>{props.children}</div>;

  return (
    <Card className={`${classes.card} ${classes["layout-card"]}`}>
      <div className={classes["navigation-group"]}>
        <Navigation />
      </div>
      <div>{props.children}</div>
    </Card>
  );
};

export default Layout;
