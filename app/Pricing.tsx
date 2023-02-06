import { Box, Flex, Text , Heading, Button, HStack, Icon} from '@chakra-ui/react'
import React from 'react'
import checkMarkIcon from './icons/checkMarkIcon';

export default function Pricing() {
  return (
  <Box maxWidth={"950px"} mx={{base:"20px", lg:"auto"}} mt="-150px" bg={"white"} borderRadius={"16px"} overflow="hidden" boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
  }
  >
    
      <Flex direction={{base:"column", md:"column", lg:"row"}}>
            <Box bg={"#cbb8ee"}  p={"40px"} textAlign={"center"} >
              <Text fontWeight={"bold" } fontSize={"24px"}> Premium PRO</Text>
              <Heading fontSize={"60px"}> $329 </Heading>
              <Text fontSize={"18px"}> billed just once </Text>
              <Button mt={"20px"} w={"300px"} bg="#805AD5" borderRadius={"8px"} color={"white"}> Get Started</Button>
            </Box>
        

            <Box  pt={"50px"} pl={"25px"} pr={"10px"}>
              <Text mb="10px">
            Access these features when you get this pricing package for your business.
              </Text>
              <HStack mb={"5px"}>
                <Icon as={checkMarkIcon} />
                <Text> International calling and messaging API </Text>
              </HStack>

              <HStack mb={"5px"}>
                <Icon as={checkMarkIcon} />
                <Text> Additional phone numbers </Text>
              </HStack>

              <HStack mb={"5px"}>
                <Icon as={checkMarkIcon} />
                <Text> Automated messages via Zapier </Text>
              </HStack>

              <HStack mb={"5px"}>
                <Icon as={checkMarkIcon} />
                <Text> 24/7 support and consulting </Text>
              </HStack>

              
              
              
            </Box>

    </Flex>
  </Box>
  );
}
