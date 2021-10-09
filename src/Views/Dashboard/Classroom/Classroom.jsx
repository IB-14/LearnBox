import React from 'react';
import { Flex, Grid, Stack, Box, Spacer } from '@chakra-ui/react';
import { LOGOUT } from '../../../constants/actions';
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import Sidebar from '../../../Components/Sidebar';

const Classroom = (props) => {

    const dispatch=useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: LOGOUT,user:"student" });
        history.push('/');
    }

    const name= JSON.parse(localStorage.getItem('student')).email
    
    return (
        <Flex w="100vw" minH="100vh">

            <Sidebar />

            <Flex minH="100vh" w="100%" bgColor="#E5E5E5">
                
                <Stack w="100%"  px="4em" py={8} spacing="5em">
    
                                        <Flex w="100%" justify="space-between" h="min-content" color="#494482">

                                            <Box as="span" w="40%" bgGradient="linear(to-br, #526EBF, #815DC9)" alignItems="center" justifyContent="center">
                                                Artificial Intelligence CSE-3002
                                            </Box>

                                            <Spacer />

                                            <Flex fontWeight="medium" bgColor="#ffffff" borderRadius="0.375rem" px="1.5rem" align="center" boxShadow="1px 1px 50px 10px rgba(108, 79, 180, 0.14)" >
                                                {name}
                                                <Spacer w="20px" />
                                                <Box as="img" src={process.env.PUBLIC_URL + '/SVGs/logout.svg'} h="60%" cursor="pointer" onClick={logout} />
                                            </Flex>

                                        </Flex>

                    {/* <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                    </Grid> */}

                </Stack>

            </Flex>

        </Flex>
    );
}

export default Classroom;