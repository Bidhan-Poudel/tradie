"use client";

import {
  Badge,
  Box,
  Card,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { servicesCardsMock, servicesMock } from "../mock";
import { IconCheck, IconWaterpolo } from "@tabler/icons-react";

export const ServiceSection = () => {
  return (
    <>
      <Grid mt={"-50px"} w={"100%"}>
        {servicesCardsMock.map((item) => (
          <Grid.Col span={{ md: 4 }}>
            <Card withBorder py={"lg"}>
              <Stack gap={"lg"}>
                <IconCheck size={30} />
                <Text>{item.text}</Text>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
      <Stack justify="center" align="center" w={"100%"} my={"xl"} gap={"lg"}>
        <Badge ta={"center"} mt={"lg"}>
          Services
        </Badge>
        <Title fz={"40"} ta={"center"} maw={"80%"} mb={"sm"}>
          Explore our comprehensive range of professional services
        </Title>
      </Stack>
      <Grid gutter={"lg"} mb={"xl"} >
        {servicesMock.services.map((item) => (
          <Grid.Col span={{ md: 4 }} my={"lg"}>
            <Stack gap={"lg"} w={"100%"} align="center">
              <IconWaterpolo size={"30"} />
              <Title fz={"30"}>{item.title}</Title>
              <Text fz={"sm"} maw={"90%"} ta={"center"}>
                {item.description}
              </Text>
            </Stack>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};
