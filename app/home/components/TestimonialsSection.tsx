"use client";
import {
  Avatar,
  Badge,
  Box,
  Card,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { Carousel } from "@mantine/carousel";
import { IconQuote } from "@tabler/icons-react";

export const TestimonialsSection = () => {
  return (
    <Box bg="offWhite" py={120}>
      <Container size="lg">
        <Stack align="center"  w="100%" gap="lg">
          <Badge size="lg" fw="500" variant="light">
            Testimonials
          </Badge>
          <Title fz={40} my="lg" ta={{lg:"center", base:"left"}} maw={{ lg: "60%", base: "100%" }}>
            Hear what they have to say about our professional services.
          </Title>
        </Stack>
        <Carousel
          slideSize="100%"
          slideGap="md"
          align="center"
          loop
          my="xl"
          withIndicators
          styles={{
            indicators: {
              position: "absolute",
              bottom: -20,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1,
            },
            indicator: {
              backgroundColor: "var(--mantine-primary-color-0)",
            },
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Carousel.Slide key={index}>
              <Card shadow="xs" px="xl" withBorder h="100%">
                <Stack gap="lg" align="center">
                  <IconQuote size={30} color="var(--mantine-primary-color-1)" />
                  <Text ta="center">
                    Working with this handyman service was a breeze! Their
                    expertise and efficiency in handling tasks, like fixing my
                    electrical issues, were impressive. I'm thrilled with the
                    results!
                  </Text>
                  <Group gap="md" mt="sm">
                    <Avatar
                      src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                      alt="Client"
                      size="lg"
                    />
                    <Stack gap={4}>
                      <Text fw="bold">John Doe</Text>
                      <Text fz="sm" c="var(--mantine-color-dimmed)">
                        Senior Designer, Tesla
                      </Text>
                    </Stack>
                  </Group>
                </Stack>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};
