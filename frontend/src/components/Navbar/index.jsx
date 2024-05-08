import { Flex, Img, Box } from "@chakra-ui/react";
import logo from '../../../public/logo.png'
import { BtnNavbar } from "./BtnNavbar";

export function Navbar() {

    return (
        <Flex
            bg='#07012C'
            w='100%'
            h='6rem'
            justifyContent='space-between'
            alignItems='center'
            px='8rem'
            boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25)'>
            <Box>
                <Img src={logo} alt="logo" />
            </Box>
            <Flex>
                    <BtnNavbar nome='Home' direcionar='/'/>
                    <BtnNavbar nome='Reservar Sala' direcionar='/reserva'/>
            </Flex>
        </Flex>
    )

}