import React from 'react';
import { Flex, Grid, Stack, Box, Spacer ,Button} from '@chakra-ui/react';
import { LOGOUT } from '../../../constants/actions';
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import Sidebar from '../../../Components/Sidebar';
import { useState } from 'react';

const Classroom = (props) => {

    const dispatch=useDispatch();
    const axios=require('axios');
    const history = useHistory();
    const [view, setView] = useState("dashboard");

    const logout = () => {
        dispatch({ type: LOGOUT,user:"student" });
        history.push('/');
    }

    const name= JSON.parse(localStorage.getItem('student')) ? JSON.parse(localStorage.getItem('student')).email : JSON.parse(localStorage.getItem('teacher')).email;
    const username="Yashi";
    const launchMeeting=async()=>{
        const result=await axios.post("http://localhost:5000/meeting");
        const url=result.data.join_url.replaceAll(
            "https://us05web.zoom.us/j/",
            "http://localhost:9999/?"
        ) + `?role=1?name=${username}`;

        const data={
            url:url,
            id:"CSE-3002"
        }
        window.location.replace(`${url}`);
        const res=await axios.post("http://localhost:5000/newMeeting",data);
    }
    const board=()=>{
        history.push("/board");
    }
    
    return (
        <Flex w="100vw" minH="100vh">

            <Sidebar setView={setView} />

            <Flex minH="100vh" w="100%" bgColor="#E5E5E5">
                
                <Stack w="100%"  px="4em" py={8} spacing="5em">
    
                                        <Flex w="100%" justify="space-between" h="min-content" color="#494482">

                                        <Box as="span" w="40%" borderRadius="10px" color="white" fontWeight="medium"  py="8px" textAlign="center" bgGradient="linear(to-br, #526EBF, #815DC9)" alignItems="center" justifyContent="center">
                                                Artificial Intelligence CSE-3002
                                            </Box>

                                            

                                            <Spacer />

                                            <Flex fontWeight="medium" bgColor="#ffffff" borderRadius="0.375rem" px="1.5rem" align="center" boxShadow="1px 1px 50px 10px rgba(108, 79, 180, 0.14)" >
                                                {name}
                                                <Spacer w="20px" />
                                                <Box as="img" src={process.env.PUBLIC_URL + '/SVGs/logout.svg'} h="60%" cursor="pointer" onClick={logout} />
                                            </Flex>

                                        </Flex>

                                        <Flex p={6}
                                        bgColor="white"
                                            w="75%"
                                            direction="centre"
                                            border="1px solid"
                                            borderRadius="10px"
                                        >
                                            {
                                                localStorage.getItem('teacher')?<Button onClick={launchMeeting}>Create Meeting</Button>:null
                                            }
                                            <Button onClick={board}>Whiteboard</Button>
                                        </Flex>

                </Stack>

            </Flex>

        </Flex>
    );
}

export default Classroom;