import { Image, useTimeout, Grid, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Theme from "../src/theme/Theme";
export default function NotFound() {
  const [redirected, setRedirected] = useState(false);

  useTimeout(() => {
    setRedirected(true);
  }, 20000);

  if (redirected) {
    window.location.href = "/";
  }

  return (
    <Grid theme={Theme} py={4} w="100%" h="100%" justifyItems="center" alignContent="center">
      <Heading size="xl" textAlign="center">
        Pagina no encontrada.
        <br />
        <br />
        Pronto te redirigiremos a la pagina principal, disculpe los inconvenientes.
      </Heading>
      <Image
        src="../src/assets/Zeus.png"
        width="350"
        height="350"
      />
    </Grid>
  );
}
