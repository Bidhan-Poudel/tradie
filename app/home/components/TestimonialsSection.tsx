"use client";
import { Avatar, Badge, Card, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import { Carousel } from "@mantine/carousel";
import { IconQuote } from "@tabler/icons-react";

export const TestimonialsSection = () => {
  return (
    <Group h={"80vh"} align="center" w={"100%"} gap={0}>
      <Badge size="lg">Testimonials</Badge>
      <Group justify="space-between">
        <Title fz="40" my="lg" maw={"60%"}>
          Hear what they have to say about our professional services.
        </Title>
      </Group>
      <Carousel
        slideSize="70%"
        height={250}
        slideGap="md"
        align={"center"}
        loop
        my="xl"
      >
        <Carousel.Slide>
          <Card px="xl" withBorder>
            <Stack gap={"xl"} align="center">
              <IconQuote size={30} />
              <Text>
                Working with this handyman service was a breeze! Their expertise
                and efficiency in handling tasks, like fixing my electrical
                issues, were impressive. I'm thrilled with the results!
              </Text>
              <Group gap={"md"}>
                <Avatar
                  src={
                    "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                  }
                  alt="Client"
                  size={"lg"}
                />
                <Stack gap={"xs"}>
                  <Text fw={"bold"}>John Doe</Text>
                  <Text>Senior Designer, Tesla</Text>
                </Stack>
              </Group>
            </Stack>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card shadow="xs" px="xl" withBorder>
            <Stack gap={"xl"} align="center">
              <IconQuote size={30} />
              <Text>
                Working with this handyman service was a breeze! Their expertise
                and efficiency in handling tasks, like fixing my electrical
                issues, were impressive. I'm thrilled with the results!
              </Text>
              <Group gap={"md"}>
                <Avatar
                  src={
                    "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                  }
                  alt="Client"
                  size={"lg"}
                />
                <Stack gap={"xs"}>
                  <Text fw={"bold"}>John Doe</Text>
                  <Text>Senior Designer, Tesla</Text>
                </Stack>
              </Group>
            </Stack>
          </Card>
        </Carousel.Slide>
        <Carousel.Slide>
          <Card shadow="xs" px="xl" withBorder>
            <Stack gap={"xl"} align="center">
              <IconQuote size={30} />
              <Text>
                Working with this handyman service was a breeze! Their expertise
                and efficiency in handling tasks, like fixing my electrical
                issues, were impressive. I'm thrilled with the results!
              </Text>
              <Group gap={"md"}>
                <Avatar
                  src={
                    "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                  }
                  alt="Client"
                  size={"lg"}
                />
                <Stack gap={"xs"}>
                  <Text fw={"bold"}>John Doe</Text>
                  <Text>Senior Designer, Tesla</Text>
                </Stack>
              </Group>
            </Stack>
          </Card>
        </Carousel.Slide>
      </Carousel>
    </Group>
  );
};
