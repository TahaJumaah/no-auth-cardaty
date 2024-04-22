"use client";
import styles from "./RecordView.module.css";
import { Spinner } from "@chakra-ui/react";
import MyAgGrid from "./AgGrid";
export default function RecordView({ cardData }) {
  if (cardData) {
    return <MyAgGrid cardData={cardData}></MyAgGrid>;
  }
  if (!cardData) {
    return null;
  }
}
