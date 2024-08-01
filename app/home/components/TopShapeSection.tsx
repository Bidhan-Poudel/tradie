import { Badge, Box, Button, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

export const TopShapeSection = () => {
  return (
    <Stack h={"100vh"} justify="center" gap={"lg"} w={"100%"} align="center">
      <Badge size="lg" variant="light">
        Appointment
      </Badge>
      <Title fz={"52"} ta={"center"} maw={"80%"} mb={"sm"}>
        Ready to get your home in top shape?
      </Title>
      <Text fz={"22"} ta={"center"} maw={"60%"}>
        Schdeule your service with us today and experience quality handyman
        solutions!
      </Text>
      <Button>
        Book Now
        <IconArrowRight size={20} />
      </Button>
    </Stack>
  );
};
