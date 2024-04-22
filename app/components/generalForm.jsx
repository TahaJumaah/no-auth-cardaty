"use client";
import { Box, Checkbox } from "@chakra-ui/react";
import styles from "./sidePanel.module.css";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Button,
  Switch,
} from "@chakra-ui/react";
export default function GeneralForm({ formHandler, onSubmit }) {
  const [soldAtDate, setSoldAtDate] = useState(false);

  return (
    <Box>
      <FormControl>
        <form
          encType="multipart/form-data"
          id="addForm"
          onSubmit={onSubmit}
          method="post"
        >
          <FormLabel htmlFor="chName">اسم حامل البطاقة</FormLabel>
          <Input
            id="chName"
            name="chName"
            placeholder="Card Holder's Name"
            required
          ></Input>

          <FormLabel htmlFor="phoneNumber">رقم الهاتف</FormLabel>
          <NumberInput>
            <NumberInputField
              id="phoneNumber"
              name="phoneNo"
              placeholder="Phone Number"
              required
            ></NumberInputField>
          </NumberInput>

          <FormLabel htmlFor="batchNumber">رقم الدفعة</FormLabel>
          <NumberInput>
            <NumberInputField
              id="batchNumber"
              name="batchNo"
              placeholder="Batch Number"
              required
            ></NumberInputField>
          </NumberInput>
          <FormLabel htmlFor="cardType">نوع البطاقة</FormLabel>
          <Select name="cardType" id="cardType" placeholder="اختر نوع البطاقة">
            <option>أغاتي</option>
            <option>بلاتينيوم</option>
          </Select>
          <FormLabel htmlFor="isSold">بطاقة مباعة؟</FormLabel>
          <input
            type="checkbox"
            name="isSold"
            id="isSold"
            value={soldAtDate}
            onChange={(Event) => {
              setSoldAtDate(!soldAtDate);
            }}
          ></input>
          <br></br>
          {soldAtDate ? (
            <Box>
              <FormLabel htmlFor="soldAtDate">تاريخ البيع</FormLabel>
              <input id="isSoldDate" name="isSoldDate" type="date"></input>
            </Box>
          ) : null}
          <br></br>
          <Button type="submit">Submit</Button>
        </form>
      </FormControl>
    </Box>
  );
}
