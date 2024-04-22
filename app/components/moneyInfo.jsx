import { Box } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./moneyInfo.module.css";

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
      <Box className={styles.mainContainer}>
        <Box>
          <p>عدد بطاقات اغاتي : {aghatyNum}</p>
        </Box>
        <Box>
          <p>حساب أغاتي : {aghatyPrice}</p>
        </Box>
        <Box>عدد بطاقات بلاتينيوم : {platNum}</Box>
        <Box>
          <p>حساب بلاتينيوم : {platPrice}</p>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
}
