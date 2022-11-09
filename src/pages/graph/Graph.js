import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { Graph } from 'react-d3-graph'
import { GrGraphQl } from 'react-icons/gr'
import devicesSvg from '../../utils/devicesSvg'

function Network() {
    const getDevices = () => {

        return localStorage.getItem('devices') ? JSON.parse(localStorage.getItem('devices')) : []

    }

    // console.log("devices", getDevices())


    const nodes = getDevices().map((device) => {
        return [...Array(device.value).keys()].map((i) => {
            return {
                id: `${device.id}-${i}`,
                name: `${device.id}-${i}`,
                svg: devicesSvg[device.name],
                size: 500,
                symbolType: 'circle',
            }
        })
    })

    // console.log(nodes.flat())


    nodes.flat().push(
        {
            id: 'internet',
            name: 'internet',

            svg: devicesSvg['internet'],
            size: 500,
        }
    )

    const links = nodes.flat().map((node, index) => {
        return {
            source: node.id,
            target: nodes.flat()[index + 1] ? nodes.flat()[index + 1].id : nodes.flat()[0].id,
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
            fontColor: 'blue',
            fontSize: 10,
            fontWeight: 'normal',
            highlightColor: 'red',
            highlightFontSize: 20,
            highlightFontWeight: 'bold',
            highlightStrokeWidth: 1.5,
            labelProperty: 'id',
        },
        link: {
            highlightColor: "lightblue",

        },
        directed: true,
        automaticRearrangeAfterDropNode: true,
        collapsible: true,
        height: window.innerHeight,
        highlightDegree: 2,
        highlightOpacity: 0.2,
        linkHighlightBehavior: true,
        maxZoom: 12,
        minZoom: 0.05,
        panAndZoom: false,
        staticGraph: false,
        width: window.innerWidth,
        d3: {
            alphaTarget: 0.05,
            gravity: -300,
            linkLength: 120,
            linkStrength: 2,
        },
    };

    const onClickNode = function (nodeId) {
        window.alert(`Clicked node ${nodeId}`);
    };

    const onClickLink = function (source, target) {
        window.alert(`Clicked link between ${source} and ${target}`);
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
                    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
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