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

export default function Page5() {
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
        top="6%"
        left="31%"
        position="absolute"
        direction="column"
        alignItems="center"
      >
        <Box bgColor="white" py="40px" px="69px" borderRadius="50px" mb="20px">
          <Text fontSize="16px">
            這兩位是賓士和灰灰，是我們開發團為的成員唷～ 目前我們團隊一次 Sprint
            週期是兩週的時間，依照我的觀察，目前團隊可以負擔的點數 (Sprint
            Point) 大約是 20 點左右。
          </Text>
          <Center
            w="80px"
            height="45px"
            position="absolute"
            top="30px"
            left="0"
            transform="translateX(-50%)"
            backgroundColor="#FBE4CA"
            borderRadius="10px"
            color="#2F454F"
            fontSize="20px"
          >
            小花：{" "}
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
          <Box>
            <Image
              position="static"
              width="214"
              height="214"
              src="/week.png"
              w="180px"
              h="180px"
            />
            <Text textAlign="center" mt="20px">
              兩週的時間
            </Text>
          </Box>
          <Center flexDirection="column" justifyContent="space-evenly">
            <Box bgColor="#2F454F" w="200px" h="3px"></Box>
          </Center>
          <Flex direction="column" justifyContent="center">
            <Image
              position="static"
              width="200"
              height="200"
              w="150px"
              h="125px"
              src="/point20.svg"
            />
            <Text textAlign="center" mt="20px">
              負擔點數 20 點
            </Text>
          </Flex>
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
            欸新來的，你應該不知道點數是什麼意思吧 哈哈
            <br />
            我來跟你介紹一下吧～ Sprint Point
            目的是為了衡量速度，是用大概花費的時間預估出的相對點數。
          </Text>
          <Center
            w="80px"
            height="45px"
            position="absolute"
            top="30px"
            left="0"
            transform="translateX(-50%)"
            backgroundColor="#2F454F"
            borderRadius="10px"
            color="#FFFFFF"
            fontSize="20px"
          >
            賓士：{" "}
          </Center>
        </Box>
        <Link href="/page6" alignSelf="center">
          <Button w="280px" borderRadius="45px" alignSelf="center">
            了解更多
          </Button>
        </Link>
      </Flex>
    </>
  );
}
