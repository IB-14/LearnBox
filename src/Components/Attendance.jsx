import React, {useState} from 'react';
import { Flex, Grid, Stack, Box } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';



const ClassCard =(props) => {
    return (
        <Stack spacing={4} 
            padding="15px"
               bgColor="white" 
            color="#6D67A7"
            fontWeight="medium"
               fontSize="xl" 
                h="60px"
                borderRadius="5px"
               cursor="pointer"
               >
            <Box as="span">{props.course}  &nbsp; &nbsp; &nbsp;<Box as="span" color="green">95%</Box></Box>
            
        </Stack>
    )
}

const Attendance = (props) => {

    const [view, setView] = useState("attendance");

    const history = useHistory();

    return (
        <Flex w="100vw" minH="100vh">

            <Sidebar setView={setView} />

            <Flex minH="100vh" w="100%" bgColor="#E5E5E5">
                
                <Stack w="100%"  px="4em" py={8} spacing="5em">
    
                    <Navbar />

                    <Grid templateColumns="repeat(1, 1fr)" gap={6}>
                        <ClassCard course="Artificial Intelligence" />
                        <ClassCard course="Blockchain"/>
                        <ClassCard course="Software Engineering"/>
                        <ClassCard course="Data Privacy"/>
                    </Grid>

                </Stack>

            </Flex>

        </Flex>
    );
}

export default Attendance;