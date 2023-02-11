export const handleError = (
  error: unknown,
  action: (message: string) => void
) => {
  let message: string;
  if (error instanceof Error) message = error.message;
  else message = String(error);
  action(getErrorMessage(message));
};

const getErrorMessage = (message: string): string => {
  switch (message) {
    case "Failed to fetch":
      return "Error al cargar. Verifica tu conexión a internet e inténtalo de nuevo.";
    case "USERNAME_EXISTS":
      return "El nombre de usuario ya existe.";
    case "EMAIL_EXISTS":
      return "El correo electrónico ya existe.";
      case "Bad credentials":
        return "Nombre de usuario o contraseña incorrectos."
    default:
      return message;
  }
};
