"use client";

import { Box, Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import styles from "./search.module.css";
import RecordView from "../components/RecordView";
import GeneralForm from "../components/generalForm";
import handleCardSearch from "../api/handleCardSearch";
import { useState } from "react";

export default function FindRecord() {
  const [cardData, setCardData] = useState(null);
  async function onSubmit(Event) {
    Event.preventDefault();
    setCardData(null);
    const searchData = await handleCardSearch(Event);
    setCardData(searchData);
  }
  return (
    <Box>
      <GeneralForm onSubmit={onSubmit}></GeneralForm>
      <RecordView cardData={cardData}></RecordView>
    </Box>
  );
}
