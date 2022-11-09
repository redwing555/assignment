import React, { useState } from 'react'
import {
    Box, FormControl, Stack, FormLabel, Text, NumberInput,
    NumberInputField, NumberIncrementStepper, NumberInputStepper,
    NumberDecrementStepper, Select, Button
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
function DevicesForm() {

    const [select, setSelect] = useState('')
    const [number, setNumber] = useState(0)
    const [linkTo, setLinkTo] = useState('')
    const [devices, setDevices] = useState(
        localStorage.getItem('devices') ?
            JSON.parse(localStorage.getItem('devices')) :
            [{ id: 'internet', name: 'internet', value: 1, linkTo: 'internet-0' }]
    )

    const navigate = useNavigate()

    const IncrementStepper = () => {
        setNumber(number + 1)
    }

    const DecrementStepper = () => {
        setNumber(number - 1)
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        if (!select || !number || !linkTo) {
            return
        }
        const newDevice = { id: select, name: select, value: number, linkTo: linkTo }
        setDevices([...devices, newDevice])
        localStorage.setItem('devices', JSON.stringify([...devices, newDevice]))
        navigate('/graph')
    }


    return (


        <Box
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={'gray.10'}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Text fontSize={'4xl'}>Linked devices to the network</Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={'white'}
                    boxShadow={'lg'}
                    p={8}

                >

                    <Stack spacing={4}>
                        <FormControl id="devices" isRequired>
                            <FormLabel>Devices</FormLabel>
                            <Select
                                name="device"
                                placeholder="Select device"
                                onChange={(e) => setSelect(e.target.value)}
                                value={select}
                            >
                                <option value="laptop">Laptop</option>
                                <option value="switch">Switch</option>
                                <option value="router">Router</option>
                                <option value="printer">Printer</option>
                                <option value="server">Server</option>
                                <option value="camera">Camera</option>
                                <option value="phone">Phone</option>
                                <option value="tablet">Tablet</option>
                                <option value="smartwatch">Smartwatch</option>
                            </Select>
                        </FormControl>
                        <FormControl id="number" isRequired>
                            <FormLabel>Number of devices</FormLabel>
                            <NumberInput
                                defaultValue={0}
                                max={30}
                                clampValueOnBlur={false}
                                onChange={(e) => setNumber(e.target.value)}
                                value={number}
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper
                                        onClick={IncrementStepper} />

                                    <NumberDecrementStepper
                                        onClick={DecrementStepper}
                                    />
                                </NumberInputStepper>
                            </NumberInput>

                        </FormControl>

                        <FormControl id="links">
                            <FormLabel>Links</FormLabel>
                            <Select
                                name="links"
                                placeholder="Select links"
                                onChange={(e) => setLinkTo(e.target.value)}
                                value={linkTo}
                                isRequired
                            >
                                {
                                    devices.map((device) => (
                                        [...Array(device.value)].map((_, i) => (
                                            <option>
                                                {device.id}-{i}
                                            </option>
                                        ))
                                    ))

                                }
                            </Select>
                        </FormControl>

                        { }
                        <Button
                            mt={4}
                            colorScheme="teal"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>

                    </Stack>

                </Box>
            </Stack>
        </Box>


    )
}

export default DevicesForm