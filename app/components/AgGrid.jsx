"use client";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { DateTime } from "luxon";
import { useState } from "react";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Center, Tag, Text } from "@chakra-ui/react";

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
    { field: "chName", headerName: "أسم حامل البطاقة" },
    { field: "phoneNo", headerName: "رقم الهاتف" },
    { field: "batchNo", headerName: "Batch No." },
    { field: "cardType", headerName: "نوع البطاقة" },
    {
      field: "createdAt",
      headerName: "تاريخ الاضافة",
      valueFormatter: (params) => {
        return DateTime.fromISO(params.value).toLocaleString();
      },
    },
    {
      field: "isSoldDate",
      headerName: "تاريخ بيع البطاقة",
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
      headerName: "حالة البطاقة",
      cellRenderer: (params) => {
        if (params.value == true) {
          return "مباعة";
        } else if (params.value == false) {
          return "متوفرة";
        } else {
          return "غير معروفة";
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
