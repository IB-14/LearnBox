import React, { useState, useEffect, useRef } from 'react';
import { Flex, 
    Stack, 
    Box,
    Center,
    Text,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    FormControl,
    FormErrorMessage, } from '@chakra-ui/react';
import WAVES from 'vanta/dist/vanta.waves.min';
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import {Form, Formik, useField} from 'formik';
import * as Yup from "yup";
import swal from '@sweetalert/with-react';
import { Link } from 'react-router-dom';

import { AUTH } from '../../constants/actions';
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';

const InputText = ({ label, ...props }) => {
    const [field, meta] = useField(props);
     return (
       <FormControl isInvalid={meta.touched && meta.error}>
         <Input bgColor="#E1E4F3"
                 size="md"
                 w="280px"
                 maxW="100%"
                 focusBorderColor= "#543B99"
                 {...field}
                 {...props}
         />
         <FormErrorMessage fontWeight="bold" maxW="280px">{meta.error}</FormErrorMessage>
       </FormControl>
     );
   };


const initialValues= {
    email: "",
    password: ""
 };

 const validationSchema = Yup.object({
     email: Yup.string()
        .email('Invalid Email Adress')
        .required('Enter Email Address'),
     password: Yup.string()
        .matches(/^.{6,}$/, "Must contain atleast 6 characters")
        .matches(/^.*[a-z].*$/, "Must contain atleast 1 lowercase character")
        .matches(/^.*[A-Z].*$/, "Must contain atleast 1 uppercase character")
        .matches(/^.*[@$!%^*#?&].*$/, "Must contain atleast one special case Character")
        .required('Enter Password'),
 })


const StudentLogin = (props) => {
    const dispatch=useDispatch();
    const history = useHistory();
    const axios=require("axios");

    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)

    const [show, setVisibility]= useState(false);
    const [submit, isSubmitting]= useState(false);

     const handleClick = () => {
        setVisibility(!show)
     }
     const clickedSubmit = (bool) => {
        isSubmitting(bool)
     }

     const onSubmit= (values) => {
        clickedSubmit(true);
        axios.post("http://localhost:5000/student/login",values)
        .then((res)=>{
            if(res.data.msg){
                swal("Login Failed","Incorrect email/password","error")
                clickedSubmit(false);
            }
            else{
                setTimeout(() => {
                    swal("Login Successful", "Redirecting you to your account...", "success", {
                        button: false
                    });
                    clickedSubmit(false);
                }, 500);
                setTimeout(() => {
                    swal.close()
                    dispatch({ type: AUTH, data:res.data.student ,user:'student'});
                    history.push("/dashboard")
                },2000);
            }
        })
       
    }

    useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(WAVES({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x2e1757,
            shininess: 10.00,
            waveHeight: 10.00,
            waveSpeed: 1.00,
            zoom: 0.82
          }))
        }
        return () => {
            // if (vantaEffect) vantaEffect.destroy()
          }
        }, [vantaEffect])

    return (

        <Formik
            initialValues= {initialValues}
            validationSchema= {validationSchema}
            onSubmit= {onSubmit}
        >

        <Form>

        <Flex ref={myRef} justify="center" align="center" h="100vh" overflow="hidden">
            
            <Box pos="absolute" top="30px" left="50px">
                <img src={process.env.PUBLIC_URL + '/SVGs/Logo.svg'} style={{height:"50px"}} />
            </Box>
            
            <Stack px={4} py={8} bgColor="#ffffff" spacing={14} justify="center" align="center" borderRadius="10px">

                <Box as="span" fontSize="2rem" fontWeight="semibold">Login</Box>

                <Stack spacing={4} maxW="100%" >   
                            
                            <InputText 
                                name="email"
                                placeholder="Student Email Address" 
                            />
                                
                    
                            <InputGroup size="md" >
                                <InputText 
                                    name="password"
                                    placeholder="Password"
                                    pr="4.5rem"
                                    type={ show ? "text" : "password"}
                                />
                                <InputRightElement width="3rem">
                                    <Button h="1.75rem" 
                                            size="sm" 
                                            color = "#ffffff" 
                                            bgGradient="linear(to-br, #543B99, #44337A)" 
                                            _hover={{ bgGradient:"linear(to-br, #44337A, #543B99)" }}
                                            focusBorderColor = "#543B99" 
                                            onClick={handleClick}>
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                </Stack>

                <Stack spacing={6} >

                {submit ? 
                    <Button 
                        bgGradient="linear(to-br, #543B99, #44337A)"
                        isLoading
                        w="280px"
                        loadingText="Logging in"
                        _hover={{ bgGradient:"linear(to-br, #44337A, #543B99)" }}
                    />
                :
                    <Button 
                        bgGradient="linear(to-br, #543B99, #44337A)"
                        variant="solid"
                        color="white"
                        colorScheme="#543B99"
                        w="280px"
                        maxW="100%"
                        h="42px"
                        _hover={{ bgGradient:"linear(to-br, #44337A, #543B99)" }}
                        type="submit"
                        >
                        Submit
                    </Button>
                }

                <Text fontSize="14px">Are you a 
                    <Box as="span" 
                            color="#44337A" 
                            fontWeight="medium"
                            cursor="pointer"
                            _hover={{color:"#543B99"}}
                            onClick={props.changeAuthPage}
                            > 
                            <Link to="/faculty-login"> 
                                <Box as="span" fontWeight="bold"> Faculty? </Box>
                            </Link>
                    </Box> 
                </Text>
                </Stack>

            </Stack>
        </Flex>

        </Form>

        </Formik>
    );
}


export default StudentLogin;