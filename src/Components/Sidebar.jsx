import React from 'react';
import { Stack, Box } from '@chakra-ui/react';
import { useHistory } from 'react-router';

const Sidebar = (props) => {
    const history=useHistory();
    const attend=()=>{ history.push('/attendance')}
    return (
        <Stack  minH="100vh" w="100px" justify="center" align="center" bgGradient="linear(to-br, #553C9A, #44337A)">

            <Stack spacing={10}>
                <Box as="img" src={process.env.PUBLIC_URL + '/SVGs/Groups.svg'} h="35px" w="35px" cursor="pointer" onClick={props.setView("dashboard")} />
                <Box as="img" src={process.env.PUBLIC_URL + '/SVGs/Leaderboard.svg'} h="35px" w="35px" cursor="pointer" onClick={props.setView("leaderboard")} />
                <Box as="img" src={process.env.PUBLIC_URL + '/SVGs/assignment.svg'} h="35px" w="35px" cursor="pointer" onClick={props.setView("assignment")} />
                <Box as="img" src={process.env.PUBLIC_URL + '/SVGs/marks.svg'} h="35px" w="35px" cursor="pointer" onClick={props.setView("marks")} />
                <Box as="img" src={process.env.PUBLIC_URL + '/SVGs/attendance.svg'} h="35px" w="35px" cursor="pointer" onClick={attend} />
                <Box as="img" src={process.env.PUBLIC_URL + '/SVGs/achievements.svg'} h="35px" w="35px" cursor="pointer" onClick={props.setView("achievements")} />
            </Stack>

        </Stack>
    );
}

export default Sidebar;