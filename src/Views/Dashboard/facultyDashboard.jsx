import React, {useState} from 'react';
import { Flex, Grid, Stack, Box } from '@chakra-ui/react';
import Sidebar from '../../Components/Sidebar';
import Navbar from '../../Components/Navbar';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';



const ClassCard =() => {
    const history = useHistory();
    const redirect=()=>{history.push("/CSE3002/classroom")}
    return (
        <Stack spacing={4} 
               align="center" 
               justify="center" 
               bgColor="white" 
               fontWeight="medium" 
               fontSize="xl" 
            //    w="250px"
                h="200px"
               borderBottomRadius="10px"
               borderBottom="#4299E1 10px solid"
               cursor="pointer"
               >
            <Box as="span" onClick={redirect}>Artificial Intelligence</Box>
            <Box as="span">CSE-3002</Box>
        </Stack>
    )
}

const FacultyDashboard = (props) => {

    const [view, setView] = useState("dashboard");

    const history = useHistory();

    return (
        <Flex w="100vw" minH="100vh">

            <Sidebar setView={setView} />

            <Flex minH="100vh" w="100%" bgColor="#E5E5E5">
                
                <Stack w="100%"  px="4em" py={8} spacing="5em">
    
                    <Navbar />

                    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                    </Grid>

                </Stack>

            </Flex>

        </Flex>
    );
}

export default FacultyDashboard;