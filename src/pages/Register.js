import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Link, Stack, Text, Checkbox, useToast } from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import LoginProviders from '../components/LoginProviders'
import { useAuth } from '../context/AuthContext'


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    // const [error, setError] = useState('')
    const toast = useToast()
    const { register } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !password || !passwordConfirm) {
            toast({
                title: "Email and Password are required",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
            return

        }
        if (password !== passwordConfirm) {
            toast({
                title: "Passwords do not match",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
            return
        }
        register(email, password)
            .then(res => {
                toast({
                    title: "Account created successfully",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })
                navigate('/login')
            })
            .catch(err => {
                toast({
                    title: err.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
            })

    }


    return (
        <Layout>
            <Box
                minH={'100vh'}
                align={'center'}

                justify={'center'}
                bg={'gray.50'}
            >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Text fontSize={'4xl'}>Create your account</Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={'white'}
                        boxShadow={'lg'}
                        p={8}
                    >
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}


                                />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                                <Text fontSize={'sm'} color={'gray.500'}>
                                    Use at least 8 characters, a mix of letters, numbers & symbols.
                                </Text>
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Confirm Password</FormLabel>
                                <Input

                                    type="password"
                                    value={passwordConfirm}
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                />
                            </FormControl>
                            <FormControl id="contact">
                                <FormLabel>Contact Number</FormLabel>
                                <Input type="tel" />
                            </FormControl>
                            <FormControl id="location">
                                <FormLabel>Location</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}
                                >
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'}>Forgot password?</Link>
                                </Stack>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    onClick={handleSubmit}
                                >
                                    Sign in
                                </Button>
                                <LoginProviders />
                            </Stack>

                            <NavLink to="/login">
                                <Text fontSize={'sm'}
                                    color={'gray.500'}
                                    align={'center'}
                                    _hover={{
                                        textDecoration: 'underline',
                                    }}
                                >
                                    Already have an account? Sign in
                                </Text>
                            </NavLink>

                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Layout>
    )
}


export default Register