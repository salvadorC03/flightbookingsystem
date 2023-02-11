import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../../store/context";

import classes from "../../styles/Styles.module.css";

const Navigation: React.FC = () => {
  const { logout } = useContext(Context);

  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <Link href="/home">
            <Typography
              sx={{ fontSize: 15, fontWeight: "bold" }}
              color="text.secondary"
              gutterBottom
            >
              Inicio
            </Typography>
          </Link>
        </li>
        <li>
          <Link href="#" onClick={logout}>
            <Typography
              sx={{ fontSize: 15, fontWeight: "bold" }}
              color="text.secondary"
              gutterBottom
            >
              Cerrar sesión
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
