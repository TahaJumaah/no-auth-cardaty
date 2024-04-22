"use client";

import { Box } from "@chakra-ui/react";

import styles from "./showAllCards.module.css";
import RecordView from "../components/RecordView";
import { useEffect, useState } from "react";
import handleCardSearch from "../api/handleCardSearch";
import getAllCards from "../api/getAllCards";

export default function ShowAllCards() {
  const [searchResult, setSearchResult] = useState(null);
  useEffect(() => {
    async function getCards() {
      const data = await getAllCards();
      setSearchResult(data);
    }
    getCards();
  }, []);

  return (
    <Box className={styles.mainContainer}>
      <RecordView cardData={searchResult}></RecordView>
    </Box>
  );
}
