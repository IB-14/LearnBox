import React from 'react';
import { Flex, Box, Spacer, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import { LOGOUT } from '../constants/actions';
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';

function Navbar(props) {

    const dispatch=useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: LOGOUT,user:"student" });
        history.push('/');
    }

    const name= JSON.parse(localStorage.getItem('student')).email
    return (
        <Flex w="100%" justify="space-between" h="min-content" color="#494482">

        <InputGroup size="md" w="40%" boxShadow="1px 1px 50px 10px rgba(108, 79, 180, 0.14)">
            <Input
                pr="4.5rem"
                placeholder="Search Classes"
                bgColor="white"
            />
            <InputRightElement>
                <Button>
                    <Search2Icon />
                </Button>
            </InputRightElement>
        </InputGroup>

            <Spacer />

            <Flex fontWeight="medium" bgColor="#ffffff" borderRadius="0.375rem" px="1.5rem" align="center" boxShadow="1px 1px 50px 10px rgba(108, 79, 180, 0.14)" >
                {name}
                <Spacer w="20px" />
                <Box as="img" src={process.env.PUBLIC_URL + '/SVGs/logout.svg'} h="60%" cursor="pointer" onClick={logout} />
            </Flex>

        </Flex>
    );
}

export default Navbar;