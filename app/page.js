"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
export default function Home() {
  return (
    <Box className={styles.mainContainer}>
      <Heading as={"h1"} fontSize={"xx-large"}>
        Cardaty
      </Heading>
    </Box>
  );
}
