import { Grid, Text, Img, Center } from "@chakra-ui/react";

export default function Footer(){
    return(
        <Grid>
        <Text textAlign="center" fontWeight='bold'>© 2023 - OLIMPO COMPANY</Text>
        <Center>
        <Img src="../src/assets/Logo.svg" height="40px" color="gray"/>
        </Center>
        <Text textAlign="center">
        Olimpo Company realiza una reserva expresa de los derechos de autor sobre las obras y
        otras prestaciones accesibles desde este sitio web, en virtud del artículo 25 de la
        Ley de Propiedad Intelectual de Venezuela.</Text>
        </Grid>
    )
}