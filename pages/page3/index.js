import Image from "./../../components/Image";
import {
  Box,
  Text,
  Center,
  Heading,
  HStack,
  Stack,
  Card,
  Button,
  Grid,
  GridItem,
  Divider,
  Flex,
} from "@chakra-ui/react";

import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";
import { useState } from "react";
import Link from "next/link";
const cardData = [
  {
    title: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
    id: "0",
  },
  {
    title: "前台職缺列表、應徵",
    id: "1",
  },
  {
    title: "應徵者的線上履歷編輯器",
    id: "2",
  },
  {
    title: "會員系統（登入、註冊、權限管理）",
    id: "3",
    priority: "1",
  },
];

export default function Page3() {
  const [cards, setCards] = useState(cardData);
  const [list, setList] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const onDragEnd = (event) => {
    const { source, destination } = event;
    console.log(event);
    if (!destination) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      if (source.droppableId === "drop-id") {
        const newItems = [...cards];
        const [remove] = newItems.splice(source.index, 1);
        const newDesItems = [...list];
        newDesItems.splice(destination.index, 0, remove);
        setList(newDesItems);
        setCards((prev) => prev.filter((c) => c.id !== remove.id));
        return;
      }

      if (source.droppableId === "list") {
        const newItems = [...list];
        const [remove] = newItems.splice(source.index, 1);
        const newDesItems = [...cards];
        newDesItems.splice(destination.index, 0, remove);
        setCards(newDesItems);
        setList((prev) => prev.filter((c) => c.id !== remove.id));
        return;
      }
    }

    // 拷貝新的 items (來自 state)
    if (source.droppableId === "drop-id") {
      let newItems = [...cards];
      const [remove] = newItems.splice(source.index, 1);

      //在 destination.index 位置貼上被拖曳的元素
      newItems.splice(destination.index, 0, remove);

      // 設定新的 items

      setCards(newItems);
    }

    if (source.droppableId === "list") {
      let newItems = [...list];
      const [remove] = newItems.splice(source.index, 1);

      //在 destination.index 位置貼上被拖曳的元素
      newItems.splice(destination.index, 0, remove);

      // 設定新的 items

      setList(newItems);
    }
  };

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
        width="190"
        height="300"
        src="/plant-2.png"
        right="2%"
        bottom="33%"
      />
      <Stack w="50%" top="10%" left="31%" position="absolute">
        <Box bgColor="white" py="40px" px="69px" borderRadius="50px" mb="30px">
          <Heading fontSize="24px" mb="14px">
            換你試看看吧!
          </Heading>
          <Text fontSize="16px">
            請把需求放到產品待辦清單，並調整待辦的優先度順序。
            我們喵喵也推薦使用來做任務的管理呢！
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
        <DragDropContext onDragEnd={onDragEnd}>
          <HStack h="58vh" spacing="63px">
            <Grid
              w="70%"
              h="100%"
              borderRadius="50px"
              border="15px solid #527275;"
              bg="white"
              templateAreas={`"headline headline"
                                        "bar cards"`}
              gridTemplateRows={"60px 1fr"}
              gridTemplateColumns={"50px 1fr"}
              flexBasis="380px"
              position="relative"
            >
              <Image
                width="100"
                height="50"
                src="/list_clip.png"
                position="absolute"
                top="0"
                left="50%"
                transform={"translateX(-50%) translateY(-100%)"}
              />
              <GridItem area="headline">
                <Box textAlign="center">
                  <Text>產品待辦清單</Text>
                  <Text>Product Backlog</Text>
                </Box>
              </GridItem>
              <GridItem area="bar">
                {" "}
                <Stack textAlign="center">
                  <Text>高</Text>
                  <Center h="300px">
                    <Box bgColor={"black"} w="2px" h="100%" />
                  </Center>
                  <Text mt="auto">低</Text>
                </Stack>
              </GridItem>
              <GridItem area="cards" position="relative">
                <Flex
                  position="absolute"
                  top="0"
                  left="0"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  direction="column"
                >
                  <Card
                    h="72px"
                    w="280px"
                    px="20px"
                    py="12px"
                    bg="white"
                    display="flex"
                    justifyContent="center"
                    border="1px dashed #BBBBBB"
                    mb="10px"
                    shadow="none"
                  ></Card>
                  <Card
                    h="72px"
                    w="280px"
                    px="20px"
                    py="12px"
                    bg="white"
                    display="flex"
                    justifyContent="center"
                    border="1px dashed #BBBBBB"
                    mb="10px"
                    shadow="none"
                  ></Card>
                  <Card
                    h="72px"
                    w="280px"
                    px="20px"
                    py="12px"
                    bg="white"
                    display="flex"
                    justifyContent="center"
                    border="1px dashed #BBBBBB"
                    mb="10px"
                    shadow="none"
                  ></Card>
                  <Card
                    h="72px"
                    w="280px"
                    px="20px"
                    py="12px"
                    bg="white"
                    display="flex"
                    justifyContent="center"
                    border="1px dashed #BBBBBB"
                    mb="10px"
                    shadow="none"
                  ></Card>
                </Flex>
                <Stack
                  spacing="5%"
                  justifyContent="center"
                  alignItems="center"
                  area="cards"
                >
                  <Droppable droppableId="list">
                    {(provided, snapshot) => (
                      <div
                        style={{ height: "328px" }}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {list.map((l, idx) => (
                          <Draggable draggableId={l.id} index={idx} key={l.id}>
                            {(provided, snapshot) => (
                              <Card
                                h="72px"
                                w="280px"
                                px="20px"
                                py="12px"
                                bg="white"
                                display="flex"
                                justifyContent="center"
                                mb="10px"
                                shadow="none"
                                border="1px dashed #BBBBBB"
                                position="relative"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {l.title}
                                {isDone && (
                                  <Image
                                    width="60"
                                    height="60"
                                    src="/check.svg"
                                    w="auto"
                                    h="auto"
                                    position="absolute"
                                    bottom="0"
                                    right="0"
                                  />
                                )}
                              </Card>
                            )}
                          </Draggable>
                        ))}
                      </div>
                    )}
                  </Droppable>
                </Stack>
              </GridItem>
            </Grid>
            <Stack spacing="5%" h="100%">
              {!isDone && (
                <>
                  <Text>請拖拉至清單中並調整順序</Text>
                  <Droppable droppableId="drop-id">
                    {(provided, snapshot) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {cards.map((card, idx) => (
                          <Draggable
                            draggableId={card.id}
                            index={idx}
                            key={card.id}
                          >
                            {(provided, snapshot) => (
                              <Card
                                h="72px"
                                w="280px"
                                px="20px"
                                py="12px"
                                bg="white"
                                display="flex"
                                justifyContent="center"
                                mb="10px"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {card.title}
                              </Card>
                            )}
                          </Draggable>
                        ))}
                      </div>
                    )}
                  </Droppable>
                </>
              )}
              {isDone && (
                <>
                  <Image
                    width="256"
                    height="213"
                    w="200"
                    src="/can.png"
                    mt="30px"
                  />
                  <Button
                    w="280px"
                    borderRadius="45px"
                    bg="white"
                    pointerEvents="none"
                    position="absolute"
                    bottom="20%"
                  >
                    恭喜你完成了！獲得罐罐一枚！
                  </Button>
                </>
              )}
              {isDone ? (
                <Link href="/page4">
                  <Button
                    w="280px"
                    borderRadius="45px"
                    position="absolute"
                    bottom="0"
                  >
                    參加貓貓聚會
                  </Button>
                </Link>
              ) : (
                <Button
                  w="280px"
                  borderRadius="45px"
                  position="absolute"
                  bottom="0"
                  disabled={!(list.length === 4)}
                  onClick={() => setIsDone(true)}
                >
                  我完成了
                </Button>
              )}
            </Stack>
          </HStack>
        </DragDropContext>
      </Stack>
    </>
  );
}
