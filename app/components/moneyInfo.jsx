"use client";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import styles from "../components/sidePanel.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function MoneyInfo({ searchResult }) {
  let platNum = 0;
  let aghatyNum = 0;
  let aghatyPrice = 0;
  let platPrice = 0;
  const [aghaty, setAghaty] = useState(null);
  const [plat, setPlat] = useState(null);
  const numberOfTypes = {};

  if (searchResult) {
    const numberOfCards = searchResult.length;

    searchResult.forEach((item) => {
      if (item.cardType == "أغاتي") {
        aghatyNum = aghatyNum + 1;
        aghatyPrice = aghatyPrice + 25000;
      }
      if (item.cardType == "بلاتينيوم") {
        platNum = platNum + 1;
        platPrice = platPrice + 50000;
      }
    });
    return (
      <Box className={styles.priceTable}>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Tbody>
              <Tr>
                <Td fontWeight={"700"}>Aghaty Cards</Td>
                <Td fontWeight={"700"}>Platinum Cards</Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>{aghatyNum}</Td>
                <Td>{platNum}</Td>
                <Td>Amount</Td>
              </Tr>
              <Tr>
                <Td>25,000 IQD</Td>
                <Td>50,000 IQD</Td>
                <Td>Card Price</Td>
              </Tr>
              <Tr>
                <Td>{aghatyPrice}</Td>
                <Td>{platPrice}</Td>
                <Td>Sum</Td>
              </Tr>

              <Tr>
                <Td colSpan={2} backgroundColor={"silver"} textAlign={"center"}>
                  {platPrice + aghatyPrice}
                </Td>
                <Td>Sub Total</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  } else {
    return null;
  }
}
