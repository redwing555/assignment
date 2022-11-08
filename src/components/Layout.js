import React from "react";
import { Box, Container } from "@chakra-ui/react"


function Layout({ children }) {
    return (
        <Box
            mb={1}
        >
            <Container maxW="container.xl">
                {children}
            </Container>
        </Box>
    )
}

export default Layout