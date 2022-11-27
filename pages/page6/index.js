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
import { useState } from "react";

export default function Page6() {
  const [isNext, setNext] = useState(false);
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
        src="/cat-gray.png"
        left="4%"
        bottom="25%"
      />{" "}
      <Image
        width="363"
        height="537"
        h="auto"
        w="18%"
        src="/cat-benz.png"
        left="10%"
        bottom="10%"
      />
      <Image
        width="190"
        height="300"
        src="/cat-flower.png"
        right="2%"
        bottom="33%"
      />
      <Flex
        w="60%"
        top="6%"
        left="26%"
        position="absolute"
        direction="column"
        alignItems="center"
      >
        <Image
          width="1075"
          height="541"
          transform="scale(0.9)"
          src="/blackboard.png"
          top="0"
          h="90%"
          position="static"
        />

        <Box
          bgColor="white"
          py="40px"
          px="69px"
          borderRadius="50px"
          mb="30px"
          position="relative"
          w="85%"
        >
          {isNext ? (
            <>
              <Text>
                以「費氏數列」的1、2、3、5、8、13、21來估算各項 Story 的分數。
              </Text>
              <Text>
                Story Point 越小，表示這個Story
                花費時間越少；越大，花費時間則越多。
              </Text>
              <Text>
                如果出現了一個21分，可能表示這個 Story
                太龐大，需要再拆分細項執行唷!
              </Text>
            </>
          ) : (
            <>
              <Text>
                沒錯，如果賓士哥說的，我這邊已經把剛剛討論好的點數標上去囉～
              </Text>
              <Text>你來練習把任務排到短衝待辦清單吧！</Text>
              <Text>
                By the way，我們平常管理任務是使用
                這套軟體，你有時間記得先去註冊和熟悉唷
              </Text>
            </>
          )}

          <Center
            w="80px"
            height="45px"
            position="absolute"
            top="30px"
            left="0"
            transform="translateX(-50%)"
            backgroundColor={isNext ? "#939CAC" : "#2F454F"}
            borderRadius="10px"
            color="#FFFFFF"
            fontSize="20px"
          >
            {isNext ? `灰灰 :` : `賓士：`}
          </Center>
        </Box>
        <Link href="/page6" alignSelf="center">
          <Button
            w="280px"
            borderRadius="45px"
            alignSelf="center"
            onClick={() => setNext(true)}
          >
            {isNext ? "就算黑貓問號，我也要挑戰！" : "繼續"}
          </Button>
        </Link>
      </Flex>
    </>
  );
}
