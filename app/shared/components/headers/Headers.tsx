"use client";

import React from "react";
import {
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Button,
} from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Headers.module.css";
import { loginLinks, navLinks } from "../../config";
import Link from "next/link";

export const Headers = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box pb={40}>
      <header className={classes.header}>
        <Group justify="space-around" h="100%">
          <MantineLogo size={30} />

          <Group h="100%" gap={0} visibleFrom="sm">
            {navLinks.map((item) => (
              <Link href="#" className={classes.link} key={item.link}>
                {item.label}
              </Link>
            ))}
          </Group>
          <Group visibleFrom="sm">
            <Button
              variant="default"
              size={"sm"}
              c={"black"}
              color="white"
              fw={400}
            >
              {loginLinks[0].label}
            </Button>
            <Button size={"sm"} fw={400}>
              {loginLinks[1].label}
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          {navLinks.map((item) => (
            <Link href="#" className={classes.link} key={item.link}>
              {item.label}
            </Link>
          ))}
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button size={"compact-lg"} c={"black"} color="white">
              {loginLinks[0].label}
            </Button>
            <Button size={"compact-lg"}>{loginLinks[1].label}</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
