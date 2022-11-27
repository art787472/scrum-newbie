import Image from "./../../components/Image";
import { Stack, Box, Heading, Text, Button, Center } from "@chakra-ui/react";
import Link from "next/link";

export default function Page2() {
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
        src="/cat-po.png"
        left="8%"
        bottom="20%"
      />
      <Image
        width="870"
        height="341"
        h="auto"
        w="45%"
        src="/cat-box.png"
        right="2%"
        bottom="4%"
      />
      <Image
        width="190"
        height="300"
        src="/plant-2.png"
        right="2%"
        bottom="33%"
      />
      <Stack
        w="50%"
        h="46%"
        alignItems="center"
        top="13%"
        left="31%"
        position="absolute"
        spacing="14px"
      >
        <Box bgColor="white" py="46px" px="69px" borderRadius="50px">
          <Heading fontSize="24px" mb="14px">
            我是喵喵村的 PO。
          </Heading>
          <Text fontSize="16px">
            PO 也就是產品負責人（Product
            Owner），產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單（Product
            Backlog）唷！
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
        <Box bgColor="white" py="42px" px="60px" borderRadius="50px">
          <Text fontSize="16px">
            剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。
            既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
          </Text>
        </Box>
        <Link href="/page3">
          <Button w="300px" h="50px" bgColor="#ACD271" borderRadius="45px">
            接受挑戰
          </Button>
        </Link>
      </Stack>
    </>
  );
}
