import Head from 'next/head'
import Link from 'next/link'
import Image from './../components/Image'
import { Container, Button } from '@chakra-ui/react'



export default function Home() {
  return (
    <>
      <Image width="300" height="380" src="/cat_springboard.png" bottom="25%" left="15%"/>
      <Image width="500" height="250" src="/title.svg" top="3%" left="30%"/>
      <Image width="180" height="140" src="/cat_basket.png" top="30%" right="20%"/>
      <Image width="1338" height="510" transform="scale(0.6)" left="2%" bottom="1%" src='/cat-all.png'></Image>
      <Image width="180" height="300" src="/plant-1.png" left="3%" bottom="25%" />

      <Image width ="190" height="300" src="/plant-2.png" right="5%" bottom="25%"/>
      <Link href='/page1'>
      <Button w="350px" height="60px" borderRadius="40px" top="35%" left="35%" bgColor="#ACD271">進入村莊</Button>
      </Link>

    </>
  )
}
