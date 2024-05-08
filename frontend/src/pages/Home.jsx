import { InputGroup, Flex, Input, InputRightElement, IconButton } from "@chakra-ui/react";
import { CardReserva } from "../components/CardReserva";
import { Navbar } from "../components/Navbar";
import { SearchIcon } from '@chakra-ui/icons'

export function Home() {
    return (
        <>
            <Navbar />

            <Flex
                px='8rem'
                mt='2rem'
                w='30%'>
                <InputGroup >
                    <Input
                        bg='white'
                        pr='4.5rem'
                        type="text"
                        placeholder='Buscar...'
                        color='black'
                    />
                    <InputRightElement>
                        <IconButton
                            aria-label='Search database'
                            bg='none'
                            _hover={{ bg: 'none' }}
                            icon={<SearchIcon />} />
                    </InputRightElement>
                </InputGroup>
            </Flex>

            <Flex
                wrap='wrap'
                px='6rem'
                mt='2rem'>
                <CardReserva nome='Natanael' sobrenome='Macahdo'/>
                <CardReserva />
                <CardReserva />
                <CardReserva />
                <CardReserva />
                <CardReserva />
                <CardReserva />

            </Flex>
        </>
    )
}