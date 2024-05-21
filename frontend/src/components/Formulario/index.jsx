import { Flex, Heading, Box, FormControl, FormLabel, Input, Button, Textarea, InputGroup, InputRightElement } from "@chakra-ui/react"

export function Formulario() {

    return (
        <Flex
            justifyContent='center'
            alignItems='center'
            w='100%'
            h='100vh'>
            <Flex
                bg='#07012C'
                w='60rem'
                borderRadius='2rem'
                boxShadow='4px 5px 4px 0px rgba(0, 0, 0, 0.50)'
                direction='column'
                alignItems='center'
                justifyContent='center'
                p='2rem'>
                <Flex
                    h='20%'
                    justifyContent='center'
                    alignItems='center'>
                    <Heading>Reservar Sala</Heading>
                </Flex>
                <Box
                    h='80%'
                    w='100%'>
                    <form>
                        <Box
                            mb='2rem'>
                            <FormControl>
                                <FormLabel>Nome da sala</FormLabel>
                                <Input type='text' />
                            </FormControl>
                        </Box>

                        <Box
                            mb='2rem'>
                            <FormControl>
                                <FormLabel>Responsável da sala</FormLabel>
                                <Input type='text' />
                            </FormControl>
                        </Box>

                        <Box
                            mb='2rem'>
                            <FormControl>
                                <FormLabel>Local da sala</FormLabel>
                                <Input type='text' />
                            </FormControl>
                        </Box>

                        <Flex
                            gap='2rem'>
                            <Box
                                mb='2rem'>
                                <FormControl>
                                    <FormLabel>Data de uso</FormLabel>
                                    <Input type='date' />
                                </FormControl>
                            </Box>
                            <Box
                                mb='2rem'>
                                <FormControl>
                                    <FormLabel>Início do uso</FormLabel>
                                    <Input type='time' />
                                </FormControl>
                            </Box>
                            <Box
                                mb='2rem'>
                                <FormControl>
                                    <FormLabel>Final do uso</FormLabel>
                                    <Input type='time' />
                                </FormControl>
                            </Box>
                        </Flex>

                        <Box
                            mb='2rem'>
                            <FormControl>
                                <FormLabel>Motivo do uso</FormLabel>
                                <Textarea />
                            </FormControl>
                        </Box>

                        <Box
                            mb='2rem'>
                            <FormControl>
                                <FormLabel>Informações gerais</FormLabel>
                                <Textarea />
                            </FormControl>
                        </Box>

                        <Flex
                            gap='2rem'>
                            <Box
                                w='50%'
                                mb='2rem'>
                                <FormControl>
                                    <FormLabel>Convidados</FormLabel>
                                    <InputGroup>
                                        <Input type='text' />
                                        <InputRightElement w='5rem'>
                                            <Button >
                                                Adicionar
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                            </Box>
                        </Flex>

                        <Flex
                            justifyContent='center'
                            alignItems='center'>
                            <Button
                                mt={4}
                                colorScheme='green'
                                type='submit'>
                                Registrar
                            </Button>
                        </Flex>

                    </form>
                </Box>
            </Flex>

        </Flex>
    )

}