import React, { useState } from 'react'
import {
    Box, FormControl, Stack, FormLabel, Text, NumberInput,
    NumberInputField, NumberIncrementStepper, NumberInputStepper,
    NumberDecrementStepper, Select, Button
} from '@chakra-ui/react'

function DevicesForm() {

    const [select, setSelect] = useState('')
    const [number, setNumber] = useState(0)

    const IncrementStepper = () => {
        setNumber(number + 1)
    }

    const DecrementStepper = () => {
        setNumber(number - 1)
    }

    const handleSubmit = (e) => {
        const devices = JSON.parse(localStorage.getItem('devices')) || []
        e.preventDefault()
        if (!select || !number) {
            return
        }
        devices.push({ select, number })
        localStorage.setItem('devices', JSON.stringify(devices))
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
                                <option value="smarttv">Smart TV</option>
                                <option value="smartfridge">Smart Fridge</option>
                                <option value="smartthermostat">Smart Thermostat</option>
                                <option value="smartlock">Smart Lock</option>
                                <option value="smartdoorbell">Smart Doorbell</option>
                                <option value="smartlightbulb">Smart Lightbulb</option>
                                <option value="smartplug">Smart Plug</option>
                                <option value="smartfan">Smart Fan</option>
                                <option value="smartvacuum">Smart Vacuum</option>
                                <option value="smartrobot">Smart Robot</option>
                                <option value="smartmirror">Smart Mirror</option>
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