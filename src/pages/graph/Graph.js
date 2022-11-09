import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../components/Sidebar'

function Graph() {
    const getDevices = () => {
        console.log(JSON.parse(localStorage.getItem('devices')))
        return localStorage.getItem('devices') ? JSON.parse(localStorage.getItem('devices')) : []

    }

    return (
        <Flex
            h="100vh"
            w="100vw"
            flexDir={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="center"
        >

            <Sidebar />
            <Box
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={'gray.10'}
            >

                {
                    getDevices().map((device, index) => {
                        console.log(device)
                        return (
                            <div key={index}>
                                <h1>{device.select}</h1>
                                <h1>{device.number}</h1>
                            </div>
                        )
                    }
                    )
                }
            </Box>

        </Flex>

    )
}

export default Graph