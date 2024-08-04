import {
  Badge,
  Button,
  Container,
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
import { IconArrowRight } from "@tabler/icons-react";

export const HeroSection = () => {
  return (
    <Container size={"lg"} py={"40"}>
      <Grid id="hero" pb={"80"}>
        <GridCol span={{ md: 6 }}>
          <Stack gap={"xl"}>
            <Badge size="lg" variant="light" fw={500}>
              {heroMock.preText}
            </Badge>
            <Title fz={"60"} pr={{ lg: "20" }}>
              The best solution for every house problem
            </Title>
            <Text fz={"lg"} pr={{ lg: "20" }}>
              Our open, positive, and proactive approach helps us find ways to
              align your work environment with the culture
            </Text>
            <Group gap={"sm"}>
              <Button size="md" radius="sm" fw={400}>
                Book Now
                <IconArrowRight size={20} style={{ marginLeft: "10px" }} />
              </Button>
              <Button size="md" fw={500} radius="sm" variant="default">
                Read More
              </Button>
            </Group>
          </Stack>
        </GridCol>
        <GridCol span={{ md: 6 }}>
          <Image
            src={heroMock.image}
            h={"100%"}
            fit="contain"
            alt="Worker with drill"
          />
        </GridCol>
      </Grid>
    </Container>
  );
};
