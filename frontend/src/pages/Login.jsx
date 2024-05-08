import { Flex, Heading, Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"

export function Login() {

    return (
        <Flex
            justifyContent='center'
            alignItems='center'
            w='100%'
            h='100vh'>
            <Flex
                bg='#07012C'
                w='30rem'
                h='28rem'
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
                    <Heading>Login</Heading>
                </Flex>
                <Box
                    h='80%'
                    w='100%'>
                    <form>
                        <Box
                            mb='2rem'>
                            <FormControl isRequired>
                                <FormLabel>Usuário</FormLabel>
                                <Input placeholder="Usuario0102" type='text' />
                            </FormControl>
                        </Box>

                        <Box
                            mb='2rem'>
                            <FormControl isRequired>
                                <FormLabel>Senha</FormLabel>
                                <Input type='password' />
                            </FormControl>
                        </Box>

                        <Flex
                            justifyContent='center'
                            alignItems='center'>
                            <Button
                                mt={4}
                                colorScheme='green'
                                type='submit'>
                                Entrar
                            </Button>
                        </Flex>

                    </form>
                </Box>
            </Flex>

        </Flex>
    )
}