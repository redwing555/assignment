import React, { useState } from 'react'

import { Box, Button, FormControl, FormLabel, Input, Link, Stack, Text, Checkbox, useToast } from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import LoginProviders from '../components/LoginProviders'
import { useAuth } from '../context/AuthContext'


const Login = () => {
    const { login, googleLogin } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const toast = useToast()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            toast({
                title: "Email and Password are required",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
            return

        }
        login(email, password)
            .then(res => {
                navigate('/')
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
                        <Text fontSize={'4xl'}>Sign in to your account</Text>
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
                                    name='email'
                                    autoComplete='email'
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    name='password'
                                    autoComplete='current-password'
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
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
                                <LoginProviders
                                    googleLogin={googleLogin}
                                />
                                <NavLink to="/register">
                                    <Text
                                        color={'blue.400'}
                                        _hover={{
                                            color: 'blue.500',
                                        }}
                                        cursor={'pointer'}
                                    >
                                        Don't have an account? Sign Up
                                    </Text>
                                </NavLink>
                            </Stack>
                        </Stack>

                    </Box>
                </Stack>
            </Box>
        </Layout>
    )
}




export default Login