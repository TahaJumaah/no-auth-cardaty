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
      setPageName("البحث عن بطاقات");
    } else if (pathName == "/addrecord") {
      setPageName("اضافة بطاقة");
    } else if (pathName == "/cards") {
      setPageName("جميع البطاقات");
    } else if (pathName == "/soldcards") {
      setPageName("حساب البطاقات المباعة");
    } else if (pathName.includes("/card") == true) {
      setPageName("معلومات البطاقة");
    } else {
      setPageName(null);
    }
  }, [pathName]);

  return (
    <Box className={styles.layout}>
      <Box className={styles.sidePanel}>
        <Button variant="solid" colorScheme="teal">
          <Link href="/"></Link>الرئيسية
        </Button>
        <Button variant="solid" colorScheme="teal">
          <Link href="/cards"></Link>عرض جميع البطاقات
        </Button>
        <Button variant="solid" colorScheme="teal">
          <Link href="/search"></Link>بحث
        </Button>
        <Button variant="solid" colorScheme="teal">
          <Link href="/addrecord"></Link>اضافة
        </Button>
        <Button variant="solid" colorScheme="teal">
          <Link href="/soldcards"></Link>البطاقات المباعة
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
