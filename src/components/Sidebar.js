

//create sidebar component with a function using chakra ui components
import React, { useState } from 'react'
import { Box, Text, Icon, Flex, Image, Button } from '@chakra-ui/react'
import { RiDashboardLine } from 'react-icons/ri'
import { BiNetworkChart, BiDevices, BiLogOut, BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


const Sidebar = () => {
    const [active, setActive] = useState(false)



    const { logout } = useAuth()


    const handleActive = () => {
        setActive(!active)
    }

    return (
        <Box
            as="aside"
            w={active ? "64" : "2.2rem"}
            bg={'gray.50'}
            transition="all 0.5s"
            height="100vh"
            position="fixed"
            top={0}
            left={0}
            zIndex="docked"
            display="flex"
            flexDirection="column"


        >



            <Flex
                align="center"
                justify="center"
                p="8"
                flexDir='column-reverse'
                gap={2}
                opacity={active ? 1 : 0}
                transition="all 100ms"

            >
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color="gray.70"

                >
                    Username
                </Text>


                <Image
                    borderRadius='full'
                    boxSize='100px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    border='2px solid white'
                />
            </Flex>




            <SidebarContent
                active={active}
                handleActive={handleActive}
            />
            <Box
                position="absolute"
                bottom={5}
                display="inline-block"
                padding='5'
                cursor="pointer"
                w='100%'

            >

                <Flex
                    align="center"
                    justify="center"
                    flexDir='row'
                    gap="5"
                >
                    <Button
                        fontSize="sm"
                        fontWeight="bold"
                        bg='red.400'
                        textTransform="uppercase"
                        leftIcon={<BiLogOut size={20} />}
                        color="white"
                        _hover={{
                            bg: 'red.500',
                        }}
                        _active={{
                            bg: 'red.600',
                            transform: 'scale(0.95)',
                        }}
                        // p={active ? '4' : '2'}
                        transition="all 0.5s"
                        onClick={logout}
                        opacity={active ? 1 : 0}


                    // variant="solid"

                    >
                        {active ? 'Logout' : ''}
                    </Button>

                    <Icon
                        as={active ? BiChevronLeft : BiChevronRight}
                        w={6}
                        h={6}
                        ml={active ? '0' : '-4.3rem'}
                        zIndex="docked"
                        color="gray.500"
                        cursor="pointer"
                        transition="all 300ms"
                        borderRadius="50%"
                        border="2px solid gray"
                        onClick={handleActive}
                    />
                </Flex>

            </Box>


        </Box >

    )
}

const SidebarContent = (props) => {
    const { active, handleActive } = props
    const navigate = useNavigate()
    const sidebarContentObj = {
        dashboard: {
            icon: RiDashboardLine,
            text: active ? 'Dashboard' : '',
            link: '/',
        },
        Devices: {
            icon: BiDevices,
            text: active ? 'Devices' : '',
            link: '/devices',
        },
        Graph: {
            icon: BiNetworkChart,
            text: active ? 'Graph' : '',
            link: '/graph',
        }

    }

    return (
        <Box
            // bg={'gray.70'}
            borderRadius="md"
            gap={4}
            p={4}

        // mt={40}

        >
            {Object.entries(sidebarContentObj).map(([key, value]) => {
                return (
                    <Flex
                        key={key}
                        p="4"
                        display="flex"
                        alignItems="center"
                        ml={active ? '0' : '-1.6rem'}
                        cursor="pointer"
                        _hover={{
                            bg: active ? "gray.200" : 'transparent',

                        }}
                        borderRadius="md"


                    >
                        <Icon
                            as={value.icon}
                            h={6}
                            w={6}

                            onClick={() => {
                                navigate(value.link)
                                handleActive()
                            }
                            }
                            _hover={{
                                bg: active ? 'transparent' : 'gray.200',
                            }}
                            borderRadius="md"
                            p="2px"

                        />
                        <NavLink
                            to={value.link}
                            exact
                            style={{ textDecoration: 'none', color: 'black' }}
                            onClick={handleActive}

                        >

                            <Text
                                ml="4"
                                fontWeight="medium"
                                color="gray.70"
                                transition="all 0.5s"

                            >
                                {value.text}
                            </Text>
                        </NavLink>

                    </Flex>
                )
            })}
        </Box>
    )
}

export default Sidebar