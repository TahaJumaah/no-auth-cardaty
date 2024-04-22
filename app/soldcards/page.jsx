"use client";
import styles from "./soldcards.module.css";
import { Box } from "@chakra-ui/react";
import GeneralForm from "../components/generalForm";
import handleSoldCards from "../api/handleSoldCards";
import SoldForm from "../components/soldForm";
import { useState } from "react";
import RecordView from "../components/RecordView";
import MoneyInfo from "../components/moneyInfo";

export default function SoldCards() {
  const [soldResult, setSoldResult] = useState(null);
  async function onSubmit(Event) {
    setSoldResult(null);
    Event.preventDefault();
    const data = await handleSoldCards(Event);
    setSoldResult(data);
  }

  return (
    <Box className={styles.mainContainer}>
      <SoldForm onSubmit={onSubmit}></SoldForm>
      <MoneyInfo searchResult={soldResult}></MoneyInfo>
      <RecordView cardData={soldResult}></RecordView>
    </Box>
  );
}
