import { Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../components/Sidebar'
import DevicesForm from './DevicesForm'

function Devices() {
    return (
        <Flex
            h="100vh"
            w="100vw"
            flexDir={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="center"
        >

            <Sidebar />
            <DevicesForm />
        </Flex >


    )
}

export default Devices