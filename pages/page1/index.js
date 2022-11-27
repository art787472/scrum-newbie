import Image from './../../components/Image'
import { Box, Text, Button, Heading } from '@chakra-ui/react'
import Link from 'next/link'

export default function Page1 () {
  return (
    <>
      <Image width="300" height="80" h="auto" src="/logo.svg" left="2%" top="1%" />
      <Image width="180" height="300" src="/plant-1.png" left="3%" bottom="25%" />
      <Image width ="190" height="300" src="/plant-2.png" right="5%" bottom="25%"/>
      <Image width="1338" height="510" transform="scale(0.6)" left="2%" bottom="1%" src='/cat-all.png' />
      <Box w="800px" h="200px" borderRadius="50px" bgColor="#FFFFFF" position="absolute" top="15%" left="20%" p="50px">
        <Heading fontSize="24px" mb="14px">哈囉~歡迎進入「SCRUM 新手村」</Heading>
        <Text fontSize="16px">在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～～</Text>
        <Link href="/page2">
          <Button w="300px" h="50px" bgColor="#ACD271" borderRadius="45px" position="absolute" bottom="-16px" right="20px">接受挑戰</Button>
        </Link>
      </Box>
    </>
  )
}