import React from 'react'
import { Flex, Icon } from '@chakra-ui/react'
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa'

function LoginProviders(props) {
    const { googleLogin } = props
    return (
        <div>
            <Flex
                // direction={{ base: 'column', sm: 'row' }}
                align={'center'}
                justify={'center'}
                gap={8}
            >
                <Icon
                    w={6}
                    h={6}
                    color={'gray.500'}
                    as={FaGoogle}
                    _hover={{
                        color: 'gray.700',
                    }}
                    cursor={'pointer'}
                    onClick={googleLogin}
                />

                <Icon
                    w={6}
                    h={6}
                    color={'gray.500'}
                    as={FaGithub}
                    _hover={{
                        color: 'gray.700',
                    }}
                    cursor={'pointer'}
                />
                <Icon
                    w={6}
                    h={6}
                    color={'gray.500'}
                    as={FaLinkedin}
                    _hover={{
                        color: 'gray.700',
                    }}
                    cursor={'pointer'}
                />
            </Flex>
        </div>
    )
}

export default LoginProviders