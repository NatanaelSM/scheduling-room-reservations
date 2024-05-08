import { Card, CardBody, Stack, Text, Flex } from "@chakra-ui/react";
import { PerfilUsuario } from "../PerfilUsuario";

export function CardReserva({nome, sobrenome}) {
    return (
        <Card
            w='20rem'
            mx='2rem'
            mb='2rem'>
            <CardBody>
                <Flex justifyContent='center'>
                    <PerfilUsuario nomeUsuario={nome} sobrenomeUsuario={sobrenome}/>
                </Flex>
                <Stack mt='6' spacing='3'>
                    <Text fontWeight='bold'>Nome da sala:</Text>
                    <Text fontWeight='bold'>local da sala:</Text>
                    <Text fontWeight='bold'>Data:</Text>
                    <Text fontWeight='bold'>Hora inicial:</Text>
                    <Text fontWeight='bold'>Hora final:</Text>
                    <Text fontWeight='bold'>Responsável:</Text>
                </Stack>
            </CardBody>
        </Card>
    )
}