"use client";
import styles from "./addrecord.module.css";
import { Box, useToast } from "@chakra-ui/react";
import handleAddCard from "./handleAddCard";
import { useRef, useState } from "react";
import GeneralForm from "../components/generalForm";
import RecordView from "../components/RecordView";
export default function AddRecord() {
  const [cardData, setCardData] = useState(null);
  const formRef = useRef();
  const toast = useToast();
  async function handleOnSubmit(Event) {
    Event.preventDefault();
    const addData = await handleAddCard(Event);
    if (addData.response.status == 200) {
      toast({ title: "Card Added Successfully", status: "success" });
    }
    if (addData.response.status == 400) {
      toast({
        title: "Failed to add Card",
        status: "error",
        isClosable: true,
        duration: 5000,
        description: addData.data._message,
      });
    }
  }

  return (
    <Box className={styles.addRecordContainer}>
      <GeneralForm onSubmit={handleOnSubmit}></GeneralForm>
    </Box>
  );
}
