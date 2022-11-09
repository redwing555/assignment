import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Flex } from '@chakra-ui/react'
function Dashboard() {


    return (
        <Flex
            h="100vh"
            w="100vw"
            flexDir={{ base: 'column', md: 'row' }}
        >
            <Sidebar />
            <div>
                <h1>Dashboard</h1>
            </div>
        </Flex>
    )
}

export default Dashboard