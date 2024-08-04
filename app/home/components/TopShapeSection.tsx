import {
  Badge,
  Box,
  Button,
  Container,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

export const TopShapeSection = () => {
  return (
    <Box bg={"primary"} py={"120"}>
      <Container size={"lg"}>
        <Stack
          justify="center"
          gap={"lg"}
          w={"100%"}
          align="center"
        >
          <Badge size="lg" variant="light" c={"white"}>
            Appointment
          </Badge>
          <Title fz={"52"} ta={"center"} maw={"80%"} c={"white"} mb={"sm"}>
            Ready to get your home in top shape?
          </Title>
          <Text fz={"22"} ta={"center"} c={"white"} maw={"60%"}>
            Schdeule your service with us today and experience quality handyman
            solutions!
          </Text>
          <Button color="white" c={"primary"}>
            Book Now
            <IconArrowRight size={20} style={{marginLeft:"10px"}}/>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
