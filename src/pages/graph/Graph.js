import { Box, Button, Flex, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { Graph } from 'react-d3-graph'
import { GrGraphQl } from 'react-icons/gr'
import devicesSvg from '../../utils/devicesSvg'

function Network() {
    const getDevices = () => {
        return localStorage.getItem('devices') ?
            JSON.parse(localStorage.getItem('devices')) :
            [{ id: 'internet', name: 'internet', value: 1, link: 'internet-0' }]

    }

    const nodes = getDevices().map((device) => {
        return [...Array(device.value).keys()].map((i) => {
            return {
                id: `${device.id}-${i}`,
                name: `${device.id}-${i}`,
                svg: devicesSvg[device.name],
                linkTo: device.linkTo
            }
        })
    })



    const links = nodes.flat().map((node, index) => {
        return {
            source: node.id,
            target: node.linkTo ? node.linkTo : 'internet-0'
        }
    })

    const data = {
        nodes: nodes.flat(),
        links: links,
    };
    const [ref, setRef] = useState(null)

    const myConfig = {
        nodeHighlightBehavior: true,
        node: {
            size: 500,
            fontColor: '#00010',
            fontSize: 15,
            fontWeight: 'bold',
            highlightColor: 'red',
            highlightFontSize: 20,
            highlightFontWeight: 'bold',
            highlightStrokeWidth: 1.5,
            labelProperty: 'name',
        },
        link: {
            highlightColor: "lightblue",

        },
        directed: true,
        automaticRearrangeAfterDropNode: true,
        collapsible: true,
        height: window.innerHeight,
        highlightDegree: 2,
        highlightOpacity: 0.1,
        linkHighlightBehavior: true,
        maxZoom: 12,
        minZoom: 0.05,
        panAndZoom: false,
        staticGraph: false,
        width: window.innerWidth,
        d3: {
            alphaTarget: 0.01,
            gravity: -300,
            linkLength: 120,
            linkStrength: 2,
        },
    };

    const toast = useToast()

    const onClickNode = function (nodeId) {
        toast({
            title: "Node clicked",
            description: `Node ${nodeId} clicked`,
            status: "info",
            duration: 9000,
            isClosable: true,
        })
    };

    const onClickLink = function (source, target) {
        toast({
            title: "A link between these nodes was clicked.",
            description: `Clicked link between ${source} and ${target}`,
            status: "info",
            duration: 9000,
            isClosable: true,
        })
    };

    const ResetNodesPosition = React.useCallback(() => {
        ref.resetNodesPositions()
    }, [ref])


    const handleRefChange = React.useCallback((ref) => {
        setRef(ref)
    }, [])



    return (

        <Flex

            flexDir={{ base: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="center"
            w="100%"
            h="100vh"
            overflow="hidden"
        >
            <Sidebar />
            <Box
                w="100%"
                // h="100vh"
                bg="gray.100"
                borderRadius="md"

            >
                <Button
                    leftIcon={<GrGraphQl />}
                    colorScheme="gray"
                    variant="solid"
                    p="4"
                    ml="5rem"
                    position="absolute"
                    top="2rem"
                    border="1px solid gray"
                    bg="white"

                    _hover={{
                        border: "1px solid transparent",
                    }}


                    onClick={ResetNodesPosition}
                >
                    Reset Position
                </Button>

                <Graph
                    id="graph-id"
                    data={data}
                    config={myConfig}
                    onClickNode={onClickNode}
                    onClickLink={onClickLink}
                    ref={handleRefChange}

                />
            </Box>
        </Flex >

    )
}

export default Network