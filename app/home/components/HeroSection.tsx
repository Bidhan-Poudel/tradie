import {
  Badge,
  Button,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { heroMock } from "../mock";

export const HeroSection = () => {
  return (
    <Grid id="hero" style={{ height: "100vh" }} align="center" justify="center">
      <GridCol span={{ md: 6 }}>
        <Stack gap={"xl"}>
          <Badge size="lg">{heroMock.preText}</Badge>
          <Title fz={"60"} pr={{ lg: "20" }}>
            The best solution for every house problem
          </Title>
          <Text fz={"lg"} pr={{ lg: "20" }}>
            Our open, positive, and proactive approach helps us find ways to
            align your work environment with the culture
          </Text>
          <Group gap={"sm"}>
            <Button size="xl" radius="md" variant="light">
              Book Now
            </Button>
            <Button size="xl" radius="md" variant="light">
              Read More
            </Button>
          </Group>
        </Stack>
      </GridCol>
      <GridCol span={{ md: 6 }}>
        <Image src={heroMock.image} alt="Worker with drill" />
      </GridCol>
    </Grid>
  );
};
