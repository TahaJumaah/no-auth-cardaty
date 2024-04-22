"use client";

import getCardByID from "@/app/api/getCardByID";
import { Box, Flex, SimpleGrid, Text, Toast, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import ControlledForm from "@/app/components/controledForm";
import handleOneCardUpdate from "@/app/api/handleOneCardUpdate";
import deleteCard from "@/app/api/deleteCard";
import { useRouter } from "next/navigation";

export default function ShowOneCard({ params }) {
  const router = useRouter();
  const [searchResult, setSearchResult] = useState(null);

  const toast = useToast();
  useEffect(() => {
    async function getbyID() {
      const res = await getCardByID(params.id);
      setSearchResult(res);
      console.log(res);
    }
    getbyID();
  }, [params.id]);

  async function onSubmit(Event) {
    toast({
      status: "loading",
      title: "جار تحديث معلومات البطاقة",
      duration: 1000,
      isClosable: true,
    });
    const res = await handleOneCardUpdate(Event, params.id);
    if (res.res.ok) {
      toast({
        status: "success",
        title: "تم تحديث معلومات البطاقة بنجاح",
        isClosable: true,
        duration: 5000,
      });
    }
    if (!res.res.ok) {
      toast({
        status: "error",
        title: "فشل تحديث معلومات البطاقة",
        isClosable: true,
        duration: 5000,
      });
    }
  }

  async function handleCardDelete(Event) {
    Event.preventDefault();
    const res = await deleteCard(Event, params.id);
    if (res.acknowledged) {
      toast({
        description: "تم حذف البطاقة بنجاح",
        duration: 5000,
        isClosable: true,
        status: "info",
      });
      setTimeout(() => {
        router.push("/cards");
      }, 3000);
    }
  }
  if (searchResult) {
    return (
      <ControlledForm
        values={searchResult}
        onSubmit={onSubmit}
        handleCardDelete={handleCardDelete}
      ></ControlledForm>
    );
  }
  if (!searchResult) {
    return (
      <Box>
        <Text>البطاقة غير موجودة</Text>
      </Box>
    );
  }

  return (
    <Box display="flex">
      <Text></Text>
    </Box>
  );
}
