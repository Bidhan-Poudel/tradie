"use client";

import {
  Badge,
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { servicesCardsMock, servicesMock } from "../mock";
import { IconCheck, IconWaterpolo } from "@tabler/icons-react";

export const ServiceSection = () => {
  return (
    <Box bg={"blue"}>
      <Container size={"lg"} pos={"relative"} pb={"80"}>
        <Grid w={"98%"} pos={{ lg: "absolute" }} left={0} top={-60}>
          {servicesCardsMock.map((item, index) => (
            <Grid.Col span={{ md: 4 }} px={0}>
              <Card
                withBorder
                py={"lg"}
                px="xl"
                bg={"primary"}
                c={"white"}
                radius={"md"}
                key={index}
              >
                <Stack>
                  <IconCheck size={30} />
                  <Text fz={"24"}>{item.text}</Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
        <Stack justify="center" align="center" w={"100%"} pt={"160"} gap={"lg"}>
          <Badge
            ta={"center"}
            variant="light"
            size="md"
            color="var(--mantine-color-blue-0)"
            c={"white"}
          >
            Services
          </Badge>
          <Title
            fz={"40"}
            c={"white"}
            fw={"500"}
            ta={{ lg: "center", base: "left" }}
            pb={"40"}
            maw={{ lg: "80%", base: "100%" }}
            mb={"sm"}
          >
            Explore our comprehensive range of professional services
          </Title>
        </Stack>
        <Grid gutter={"xl"} mb={"xl"}>
          {servicesMock.services.map((item, index) => (
            <Grid.Col span={{ md: 4 }} my={"lg"} px={0} key={index}>
              <Stack gap={"sm"} w={"100%"} align="center">
                <IconWaterpolo size={"30"} color="white" />
                <Title fz={"30"} c={"white"} mt={"sm"}>
                  {item.title}
                </Title>
                <Text fz={"sm"} maw={"80%"} c={"white"} ta={"center"}>
                  {item.description}
                </Text>
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
