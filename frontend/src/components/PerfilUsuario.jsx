import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";


export function PerfilUsuario({nomeUsuario, sobrenomeUsuario}){

    const [iniciais, setIniciais] = useState('')

    const getIniciais = () => {
        
        let nome = nomeUsuario.split('');
        let inicialNome = nome[0];

        let sobrenome = sobrenomeUsuario.split('');
        let inicialSobrenome = sobrenome[0];

        setIniciais(inicialNome + inicialSobrenome)

    }

    return(
        <Flex
        justifyContent='center'
        alignItems='center'
            borderRadius='2rem'
            w='4rem'
            h='4rem'
            bg='blue'>
                <Heading color='white'>{iniciais}</Heading>
        </Flex>
    )
}