"use client";

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
  Box,
  Center,
} from "@chakra-ui/react";

export default function SoldForm({ onSubmit }) {
  return (
    <Box>
      <FormControl>
        <form onSubmit={onSubmit}>
          <FormLabel htmlFor="datefrom">من تاريخ</FormLabel>
          <input required type="date" name="dateFrom" id="datefrom" />
          <FormLabel htmlFor="dateto">الى تاريخ</FormLabel>
          <input required type="date" name="dateTo" id="dateto" />
          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </FormControl>
    </Box>
  );
}
