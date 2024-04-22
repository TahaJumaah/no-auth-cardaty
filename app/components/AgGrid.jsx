"use client";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { DateTime } from "luxon";
import { useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Box, Center, Tag, Text } from "@chakra-ui/react";

export default function MyAgGrid({ cardData }) {
  const router = useRouter();
  const onCellClicked = useCallback(
    (params) => {
      router.push(`/card/${params.data._id}`);
    },
    [router]
  );

  const [rowData, setRowData] = useState(cardData);
  const [colDefs, setColDefs] = useState([
    { field: "chName", headerName: "Card Holder Name" },
    { field: "phoneNo", headerName: "Phone Number" },
    { field: "batchNo", headerName: "Batch No." },
    { field: "cardType", headerName: "Card Type" },
    {
      field: "createdAt",
      headerName: "Date Added",
      valueFormatter: (params) => {
        return DateTime.fromISO(params.value).toLocaleString();
      },
    },
    {
      field: "isSoldDate",
      headerName: "Date Sold",
      valueFormatter: (params) => {
        if (params.value) {
          return DateTime.fromISO(params.value).toLocaleString();
        } else {
          return null;
        }
      },
    },
    {
      field: "isSold",
      headerName: "Card Status",
      cellRenderer: (params) => {
        if (params.value == true) {
          return (
            <Box
              fontWeight={"700"}
              textAlign={"center"}
              backgroundColor={"#FF0000"}
              borderRadius={"15px"}
            >
              Sold
            </Box>
          );
        } else if (params.value == false) {
          return (
            <Box
              fontWeight={"700"}
              textAlign={"center"}
              backgroundColor={"#C6F6D5"}
            >
              Available
            </Box>
          );
        } else {
          return "Unknown";
        }
      },
    },
  ]);

  return (
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: 500 }} // the grid will fill the size of the parent container
    >
      <Tag
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={"1.3em"}
        colorScheme={"green"}
        textAlign="center"
      >
        Double click to edit or delete an entry
      </Tag>
      <AgGridReact
        pagination
        paginationPageSize={20}
        rowData={rowData}
        columnDefs={colDefs}
        onCellDoubleClicked={onCellClicked}
      />
    </div>
  );
}
