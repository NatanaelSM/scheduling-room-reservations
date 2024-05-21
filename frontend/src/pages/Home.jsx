import { InputGroup, Flex, Input, InputRightElement, IconButton } from "@chakra-ui/react";
import { CardReserva } from "../components/CardReserva";
import { Navbar } from "../components/Navbar";
import { SearchIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {

    const [usuario, setUsuario] = useState({});
    const [reservas, setReserva] = useState([]);

    useEffect(() => {
        fetchReservas();
    }, []);

    const fetchReservas = async () => {
        try{
            const req = await axios.get('http://localhost:8800/reservas');
            console.log(req);
            setReserva(req.data);
        }catch(error){
            console.log(error);
        }
    }

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
                {reservas.map((reserva, index) => {
                    return <CardReserva key={index} reserva={reserva}/>
                })}
            </Flex>
        </>
    )
}