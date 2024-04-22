"use client";
import { Box, Button, Heading } from "@chakra-ui/react";
import { Router } from "next/router";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import styles from "./sidePanel.module.css";
import Link from "next/link";

export default function SideBar({ children }) {
  const [burgerExpanded, setBurgerExpanded] = useState(true);
  const pathName = usePathname();
  const [pageName, setPageName] = useState(null);
  const [activePage, setActivePage] = useState(null);
  useEffect(() => {
    if (pathName == "/search") {
      setPageName("Search for cards");
    } else if (pathName == "/addrecord") {
      setPageName("Add a Card");
    } else if (pathName == "/cards") {
      setPageName("All Cards");
    } else if (pathName == "/soldcards") {
      setPageName("Information about sold Cards");
    } else if (pathName.includes("/card") == true) {
      setPageName("Card Information");
    } else {
      setPageName(null);
    }
  }, [pathName]);

  return (
    <Box className={styles.layout}>
      <Box className={styles.sidePanel}>
        <Button variant="solid" colorScheme="teal">
          <Link href="/"></Link>Home
        </Button>
        <Button variant="solid" colorScheme="teal">
          <Link href="/cards"></Link>Show All Cards
        </Button>
        <Button variant="solid" colorScheme="teal">
          <Link href="/search"></Link>Search
        </Button>
        <Button variant="solid" colorScheme="teal">
          <Link href="/addrecord"></Link>Add
        </Button>
        <Button variant="solid" colorScheme="teal">
          <Link href="/soldcards"></Link>Sold Cards
        </Button>
      </Box>
      <Box className={styles.pageName}>
        <Heading as={"h1"} fontSize={"xx-large"}>
          {pageName}
        </Heading>
      </Box>

      <Box className={styles.mainContent}>{children}</Box>
    </Box>
  );
}
