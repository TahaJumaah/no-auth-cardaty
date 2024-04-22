"use client";
import { Box, Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Button,
  Switch,
} from "@chakra-ui/react";

export default function ControlledForm({ values, onSubmit, handleCardDelete }) {
  const [valueState, setValueState] = useState(values);
  const [checkedState, setCheckedState] = useState(values.isSold);

  const [wasValueUpdated, setWasValueUpdated] = useState(false);
  //   This will only render the form with filled states if "Values" is present.
  if (values) {
    return (
      <Box>
        <FormControl>
          <form
            encType="multipart/form-data"
            id="updateForm"
            onSubmit={onSubmit}
            method="post"
          >
            <FormLabel htmlFor="chName">اسم حامل البطاقة</FormLabel>
            <Input
              id="chName"
              name="chName"
              placeholder="Card Holder's Name"
              value={valueState.chName}
              onChange={(Event) => {
                setWasValueUpdated(true);
                setValueState({ ...valueState, chName: Event.target.value });
              }}
            ></Input>

            <FormLabel htmlFor="phoneNumber">رقم الهاتف</FormLabel>
            <NumberInput
              id="phoneNumber"
              name="phoneNo"
              placeholder="Phone Number"
              value={valueState.phoneNo}
              onChange={(Event) => {
                setWasValueUpdated(true);
                setValueState({ ...valueState, phoneNo: Event });
              }}
            >
              <NumberInputField></NumberInputField>
            </NumberInput>

            <FormLabel htmlFor="batchNumber">رقم الدفعة</FormLabel>

            <NumberInput
              id="batchNumber"
              name="batchNo"
              placeholder="Batch Number"
              value={valueState.batchNo}
              onChange={(Event) => {
                setWasValueUpdated(true);
                setValueState({ ...valueState, batchNo: Event });
              }}
            >
              <NumberInputField></NumberInputField>
            </NumberInput>
            <FormLabel htmlFor="cardType">نوع البطاقة</FormLabel>
            <Select
              name="cardType"
              id="cardType"
              placeholder="اختر نوع البطاقة"
              value={valueState.cardType}
              onChange={(Event) => {
                setWasValueUpdated(true);
                setValueState({ ...valueState, cardType: Event.target.value });
              }}
            >
              <option>أغاتي</option>
              <option>بلاتينيوم</option>
            </Select>
            <FormLabel htmlFor="isSold">بطاقة مباعة؟</FormLabel>
            <input
              type="checkbox"
              name="isSold"
              id="isSold"
              checked={valueState.isSold}
              onChange={(Event) => {
                setWasValueUpdated(true);

                setValueState({ ...valueState, isSold: Event.target.checked });
              }}
            ></input>
            <br></br>
            {valueState.isSold ? (
              <Box>
                <FormLabel htmlFor="soldAtDate">تاريخ البيع</FormLabel>
                <input
                  id="isSoldDate"
                  name="isSoldDate"
                  type="date"
                  value={
                    valueState.isSoldDate
                      ? new Date(valueState.isSoldDate)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  onChange={(Event) => {
                    setWasValueUpdated(true);

                    setValueState({
                      ...valueState,
                      isSoldDate: Event.target.value,
                    });
                  }}
                ></input>
              </Box>
            ) : null}
            <br></br>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                isDisabled={wasValueUpdated ? false : true}
                type="submit"
                colorScheme="green"
              >
                تحديث البيانات
              </Button>
              <Button onClick={handleCardDelete} colorScheme="red">
                حذف البطاقة
              </Button>
            </Box>
          </form>
        </FormControl>
        {/* <Box display="flex" flexDir="column">
          <p>{valueState.chName}</p>
          <p>{valueState.phoneNo}</p>
          <p>{valueState.batchNo}</p>
          <p>{valueState.cardType}</p>
          <p>{valueState.isSold.toString()}</p>
          <p>{valueState.isSoldDate}</p>
          <p>{valueState._id}</p>
        </Box> */}
      </Box>
    );
  }
}
