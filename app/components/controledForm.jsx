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
            <FormLabel htmlFor="chName">Card Holder Name</FormLabel>
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

            <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
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

            <FormLabel htmlFor="batchNumber">Batch Number</FormLabel>

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
            <FormLabel htmlFor="cardType">Card Type</FormLabel>
            <Select
              name="cardType"
              id="cardType"
              placeholder="Select Card Type"
              value={valueState.cardType}
              onChange={(Event) => {
                setWasValueUpdated(true);
                setValueState({ ...valueState, cardType: Event.target.value });
              }}
            >
              <option>أغاتي</option>
              <option>بلاتينيوم</option>
            </Select>
            <FormLabel htmlFor="isSold">Sold Card?</FormLabel>
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
                <FormLabel htmlFor="soldAtDate">Date Sold</FormLabel>
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
                Update Card
              </Button>
              <Button onClick={handleCardDelete} colorScheme="red">
                Delete Card
              </Button>
            </Box>
          </form>
        </FormControl>
      </Box>
    );
  }
}
