import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Box,
  Icon,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { BiPlayCircle } from "react-icons/bi";
// import { TriangleLeftIcon } from '@chakra-ui/icons'

const Item = () => {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <AccordionIcon m={{md:2.5,sm: 1.3}}/>
            <Box flex="1" textAlign="left" fontWeight="semibold" fontSize={[ "xs", "sm","md",]} ml={[2, 4, 6, 8]}>
              Course Name
            </Box>
            <Box  fontSize={["xs","sm", ]}>
            <span> 0 lectures </span>

            <Icon viewBox="0 0 200 200" color="red.00" boxSize={1} m={1}>
              <path
                fill="currentColor"
                d="M 100, 100 m -79, 0 a 7,7 0 1,0 150,0 a 5,5 0 0,0 -150,0"
              />
            </Icon>

            <span> 0h 00m</span>

            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} >
          <Flex p={1} fontSize={[ "sm","md",]} >
             <Box p="1" ml={2}>
               <BiPlayCircle/>
             </Box>
            
             <Box ml={2}> 
              course video
             </Box>
              <Spacer/>
              <Text fontSize={["xs","sm", ]}>
             <span > 0.00</span>
             </Text>
          </Flex>
          <Flex p={1} fontSize={[ "sm","md",]}>
             <Box p="1" ml={2}>
               <BiPlayCircle/>
             </Box>
            
             <Box ml={2}> 
              course video
             </Box>
              <Spacer/>
              <Text fontSize={["xs","sm", ]}>
             <span > 0.00</span>
             </Text>
          </Flex>
          <Flex p={1} fontSize={[ "sm","md",]}>
             <Box p="1" ml={2}>
               <BiPlayCircle/>
             </Box>
            
             <Box ml={2}> 
              course video
             </Box>
              <Spacer/>
              <Text fontSize={["xs","sm", ]}>
             <span > 0.00</span>
             </Text>
          </Flex>
          
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};
export default Item;
