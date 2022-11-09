

//create sidebar component with a function using chakra ui components
import React, { useState } from 'react'
import { Box, Text, Icon, Flex, Image, Button } from '@chakra-ui/react'
import { RiDashboardLine } from 'react-icons/ri'
import { BiNetworkChart, BiDevices, BiLogOut, BiCircle } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
    const [active, setActive] = useState(false)


    const handleActive = () => {
        setActive(!active)
    }

    return (
        <Box
            as="aside"
            w={active ? "64" : "6rem"}
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

            <Icon
                as={BiCircle}
                w={8}
                h={8}
                color="gray.500"
                cursor="pointer"
                onClick={handleActive}
            />

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
            />
            <Box
                position="absolute"
                bottom={5}
                display="inline-block"
                padding='5'
                cursor="pointer"
                w='100%'

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
                    p={active ? '4' : '2'}
                    transition="all 0.5s"

                // variant="solid"

                >
                    {active ? 'Logout' : ''}
                </Button>

            </Box>


        </Box >

    )
}

const SidebarContent = (props) => {
    const { active } = props
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
                        m={2}
                        cursor="pointer"
                        _hover={{
                            bg: 'gray.100'
                        }}
                        borderRadius="md"

                    >
                        <Icon as={value.icon} fontSize="20" />
                        <NavLink
                            to={value.link}
                            exact
                            activeClassName="active"
                            style={{ textDecoration: 'none', color: 'black' }}

                        >

                            <Text
                                ml="4"
                                fontWeight="medium"
                                color="gray.70"
                                transition="all 0.5s"
                                content={active ? value.text : ''}
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


// const SidebarContent = () => {
//     return (
// <Box
//     bg={'gray.70'}
//     display="flex"
//     flexDirection="column"
//     gap={4}
//     p="4"
//     mt={40}
//     alignItems="center"
//     justifyContent="center"
// >
//     <Box
//         display={'flex'}
//         _hover={{
//             bg: 'gray.100',
//             cursor: 'pointer'
//         }}
//         w="100%"
//         p="2"
//         borderRadius="md"

//     >
//         <Icon as={RiDashboardLine} fontSize="20" />
//         <Text ml="4" fontWeight="medium">

//             Devices
//         </Text>
//     </Box>
//     <Box
//         display={'flex'}
//         _hover={{
//             bg: 'gray.100',
//             cursor: 'pointer'
//         }}
//         w="100%"
//         p="2"
//         borderRadius="md"
//     >
//         <Icon as={BiNetworkChart} fontSize="20" />
//         <Text ml="4" fontWeight="medium">
//             Graph
//         </Text>

//     </Box>


// </Box >


//     )
// }


export default Sidebar