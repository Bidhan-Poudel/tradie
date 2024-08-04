"use client";

import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { IconArrowRight, IconMapPin } from "@tabler/icons-react";
import React from "react";

export const BookingSection = () => {
  return (
    <Container size={"lg"} pt={"120"} pb={"80"}>
      <Badge>Contact Us</Badge>
      <Title fz={"30"} my={"lg"}>
        Booking Form
      </Title>
      <Text fz={"md"} my={"lg"}>
        Fill Out the form below to get a quote on your project.
      </Text>
      <Grid gutter={"xl"}>
        <Grid.Col span={{ md: 7 }}>
          <Stack gap={"lg"}>
            <Group gap={"lg"}>
              <TextInput
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                w={"45%"}
              />
              <TextInput
                label="Email"
                type="email"
                placeholder="Enter your email address"
                w={"45%"}
              />
            </Group>
            <Group gap={"lg"}>
              <TextInput
                label="Phone Number"
                placeholder="Enter your phone number"
                type="tel"
                w={"45%"}
              />
              <TextInput
                label="Date"
                type="date"
                placeholder="Select Date"
                w={"45%"}
              />
            </Group>
            <Textarea
              label="Address"
              placeholder="Input your address"
              w={"93%"}
            />
            <Button size="lg" radius="md" w={"40%"}>
              Get a Quote
              <IconArrowRight size={20} />
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ md: 5 }}>
          <Stack gap={"lg"}>
            <Card withBorder p={"lg"}>
              <IconMapPin size={30} />
              <Text mt={"lg"}>952 Bald Hill St, Ashvielle NC 28803</Text>
            </Card>
            <Card withBorder p={"lg"}>
              <IconMapPin size={30} />
              <Text mt={"lg"}>952 Bald Hill St, Ashvielle NC 28803</Text>
            </Card>
            <Card withBorder p={"lg"}>
              <IconMapPin size={30} />
              <Text mt={"lg"}>952 Bald Hill St, Ashvielle NC 28803</Text>
            </Card>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
