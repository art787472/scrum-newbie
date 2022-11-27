import Image from "./../../components/Image";
import {
  Stack,
  Box,
  Text,
  Heading,
  Center,
  Flex,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Page4() {
  return (
    <>
      <Image
        width="300"
        height="80"
        h="auto"
        src="/logo.svg"
        left="2%"
        top="1%"
      />
      <Image
        width="363"
        height="537"
        h="auto"
        w="18%"
        src="/cat-po-2.png"
        left="8%"
        bottom="20%"
      />
      <Image
        width="190"
        height="300"
        src="/cat-flower.png"
        right="2%"
        bottom="33%"
      />
      <Flex
        w="50%"
        top="10%"
        left="31%"
        position="absolute"
        direction="column"
        alignItems="center"
      >
        <Box bgColor="white" py="40px" px="69px" borderRadius="50px" mb="20px">
          <Text fontSize="16px">
            產品待辦清單好了之後，我們來召集 Scrum Master
            和開發團隊共同召開短衝規劃會議（Sprint
            Planning）。短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint
            Backlog），並由開發團隊在接下來的產品開發週期裡執行。
          </Text>
          <Center
            w="80px"
            height="56px"
            position="absolute"
            top="30px"
            left="-15px"
            backgroundColor="#FFB464"
            borderRadius="10px"
            color="#2F454F"
            fontSize="20px"
          >
            PO：{" "}
          </Center>
        </Box>
        <Flex
          bgColor="white"
          py="40px"
          px="69px"
          borderRadius="50px"
          justifyContent="space-between"
          mb="30px"
          alignSelf="stretch"
        >
          <Image
            position="static"
            width="214"
            height="214"
            src="/team.png"
            w="200px"
            h="200px"
          />
          <Center flexDirection="column" justifyContent="space-evenly">
            <Image
              position="static"
              width="200"
              height="200"
              src="/sprint_planning.png"
              w="auto"
              h="auto"
            />
            <Box bgColor="#2F454F" w="200px" h="3px"></Box>
            <Text textAlign="center">
              短衝規劃會議
              <br /> （Sprint Planning）
            </Text>
          </Center>
          <Box>
            <Image
              position="static"
              width="200"
              height="200"
              w="150px"
              h="125px"
              src="/sprint_backlog.png"
            />
            <Text textAlign="center" mt="20px">
              短衝待辦清單 <br /> （Sprint Backlog）
            </Text>
          </Box>
        </Flex>
        <Box
          bgColor="white"
          py="40px"
          px="69px"
          borderRadius="50px"
          mb="30px"
          position="relative"
        >
          <Text fontSize="16px">
            嗨嗨 你是新來的前端吧！我是這次的 Scrum Master
            小花，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對
            Scrum 瞭解。
          </Text>
          <Center
            w="80px"
            height="56px"
            position="absolute"
            top="30px"
            left="-15px"
            backgroundColor="#FBE4CA"
            borderRadius="10px"
            color="#2F454F"
            fontSize="20px"
          >
            小花：{" "}
          </Center>
        </Box>
        <Link href="/page5" alignSelf="center">
          <Button w="280px" borderRadius="45px" alignSelf="center">
            了解
          </Button>
        </Link>
      </Flex>
    </>
  );
}
