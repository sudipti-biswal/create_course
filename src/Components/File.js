import { Container, Heading, Accordion, Icon ,Box} from "@chakra-ui/react";
import Item from "./Item";
const File = () => {
  return (
    <>
      <Container maxW="container.lg" leftContent>
        <Heading as="h3" size="lg" pb={4} pt={4} >
          Course Content
        </Heading>
        <Box fontSize={["xs","sm"]}>
        <span> 0 lectures </span>
        <Icon viewBox="0 0 200 200" color="red.00" boxSize={1} m={1}>
          <path
            fill="currentColor"
            d="M 100, 100 m -79, 0 a 7,7 0 1,0 150,0 a 5,5 0 0,0 -150,0"
          />
        </Icon>
        <span> 0h 00m</span>
         <Icon viewBox="0 0 200 200" color="red.00" boxSize={1} m={1.5}>
              <path
                fill="currentColor"
                d="M 100, 100 m -79, 0 a 7,7 0 1,0 150,0 a 5,5 0 0,0 -150,0"
              />
            </Icon>
            <span> 0h 00m total lenght</span>
        </Box>
        <Accordion allowToggle>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Accordion>
      </Container>
    </>
  );
};
export default File;
