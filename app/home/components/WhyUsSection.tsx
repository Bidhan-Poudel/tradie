"use client";

import {
  Badge,
  Button,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import React from "react";

export const WhyUsSection = () => {
  return (
    <Grid id="hero" align="center" justify="center" my={"60"} h={"80vh"}>
      <Grid.Col span={{ md: 6 }}>
        <Image
          src={
            "https://w7.pngwing.com/pngs/789/68/png-transparent-mechanical-engineering-engineer-image-file-formats-hat-people-thumbnail.png"
          }
          fit="contain"
          h={500}
        />
      </Grid.Col>
      <Grid.Col span={{ md: 6 }}>
        <Stack gap={"lg"} justify="start" align="start" h={"100%"}>
          <Badge variant="light" size="lg" ml={{ lg: "20" }}>
            Why Us
          </Badge>
          <Title fz={"40"} ml={{ lg: "20" }}>
            The Renova advantage: reasons to trust our expertise
          </Title>
          <Text fz={"sm"} ml={{ lg: "20" }}>
            Our open, positive, and proactive approach helps us find ways to
            align your work environment with the culture
          </Text>
          <Group gap={"md"} ml={{ lg: "20" }}>
            <IconCircleCheck size={30} />
            <Text fz={"lg"} fw={"bold"}>
              Monthly Inspection
            </Text>
          </Group>
          <Group gap={"md"} ml={{ lg: "20" }}>
            <IconCircleCheck size={30} />
            <Text fz={"lg"} fw={"bold"}>
              General Repair Maintainance
            </Text>
          </Group>
          <Group gap={"md"} ml={{ lg: "20" }}>
            <IconCircleCheck size={30} />
            <Text fz={"lg"} fw={"bold"}>
              Fixing of Faulty Wiring
            </Text>
          </Group>
          <Button size="md" radius="md" ml={{ lg: "20" }}>
            Book Now
          </Button>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};