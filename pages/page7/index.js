import Image from "./../../components/Image";
import {
  Stack,
  Box,
  Text,
  Heading,
  Center,
  Flex,
  Button,
  Card,
  Circle,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";
import { useState } from "react";

const cardData = [
  {
    title: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
    score: 8,
    id: "0",
  },
  {
    title: "前台職缺列表、應徵",
    score: 5,
    id: "1",
  },
  {
    title: "應徵者的線上履歷編輯器",
    score: 13,
    id: "2",
  },
  {
    title: "會員系統（登入、註冊、權限管理）",
    score: 8,
    id: "3",
  },
];

export default function () {
  const [productList, setProductList] = useState(cardData);
  const [sprintList, setSprintList] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      if (source.droppableId === "product-list") {
        if (sprintList.length >= 3) {
          return;
        }
        const newItems = [...productList];
        const [remove] = newItems.splice(source.index, 1);
        setSprintList([...sprintList, remove]);
        setProductList((prev) => prev.filter((c) => c.id !== remove.id));
        return;
      }

      if (source.droppableId === "sprint-list") {
        const newItems = [...sprintList];
        const [remove] = newItems.splice(source.index, 1);
        setProductList([...productList, remove]);
        setSprintList((prev) => prev.filter((c) => c.id !== remove.id));
        return;
      }
    }

    // 拷貝新的 items (來自 state)
    if (source.droppableId === "product-list") {
      let newItems = [...productList];
      const [remove] = newItems.splice(source.index, 1);

      //在 destination.index 位置貼上被拖曳的元素
      newItems.splice(destination.index, 0, remove);

      // 設定新的 items

      setProductList(newItems);
    }

    if (source.droppableId === "sprint-list") {
      let newItems = [...sprintList];
      const [remove] = newItems.splice(source.index, 1);

      //在 destination.index 位置貼上被拖曳的元素
      newItems.splice(destination.index, 0, remove);

      // 設定新的 items

      setSprintList(newItems);
    }
  };
  const score = sprintList.reduce((acc, l) => acc + l.score, 0);

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
        right="2%"
        bottom="-14%"
      />{" "}
      <Image
        width="363"
        height="537"
        h="auto"
        w="18%"
        src="/cat-benz.png"
        left="5%"
        bottom="-8%"
      />
      <Image
        width="190"
        height="300"
        src="/cat-flower.png"
        right="4%"
        bottom="33%"
      />
      <Image
        width="363"
        height="537"
        h="auto"
        w="18%"
        src="/cat-po-2.png"
        left="5%"
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
        <Box bgColor="white" py="40px" px="69px" borderRadius="50px" mb="40px">
          <Heading fontSize="24px" mb="16px">
            換你試看看吧!
          </Heading>
          <Text fontSize="16px">
            把 「 產品待辦清單 」 的項目拖進 「 開發Ａ組的短衝待辦清單 」 裡吧
            ！ 提示 ： 置入兩項以上的 Story ， 點數總和不能超過團隊負擔上限 20
            點唷 ！
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
        <DragDropContext onDragEnd={onDragEnd}>
          <Flex w="100%" h="450px" justifyContent="space-around">
            <Flex
              direction="column"
              w="40%"
              h="100%"
              borderRadius="50px"
              border="15px solid #527275;"
              bg="white"
              position="relative"
              alignItems="center"
            >
              <Box textAlign="center" mb="10px">
                <Text>產品待辦清單</Text>
                <Text>Product Backlog</Text>
              </Box>

              <Image
                width="100"
                height="50"
                src="/list_clip.png"
                position="absolute"
                top="0"
                left="50%"
                transform={"translateX(-50%) translateY(-100%)"}
              />
              <Droppable droppableId="product-list">
                {(provided, snapshot) => (
                  <div
                    style={{ height: "328px" }}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {productList.map((p, idx) => (
                      <Draggable draggableId={p.id} index={idx} key={p.id}>
                        {(provided, snapshot) => (
                          <Card
                            h="72px"
                            w="290px"
                            px="20px"
                            py="12px"
                            bg="white"
                            mb="10px"
                            display="flex"
                            direction="row"
                            align="center"
                            shadow="none"
                            border="1px solid #BBBBBB"
                            color="#2F454F"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Circle
                              size="35px"
                              bgColor="#527275"
                              color="#FFFFFF"
                              mr="6px"
                            >
                              {p.score}
                            </Circle>
                            {p.title}
                          </Card>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </Flex>
            <Flex
              direction="column"
              w="40%"
              h="100%"
              borderRadius="50px"
              border="15px solid  #DE6E46;"
              bg="white"
              position="relative"
              alignItems="center"
            >
              <Box textAlign="center" mb="10px">
                <Text>開發Ａ組的短衝待辦清單</Text>
                <Text>Sprint Backlog</Text>
              </Box>
              <Image
                width="100"
                height="50"
                src="/list_clip.png"
                position="absolute"
                top="0"
                left="50%"
                transform={"translateX(-50%) translateY(-100%)"}
              />
              <Image
                width="256"
                height="67"
                w="240px"
                src="/mouse.png"
                bottom="50px"
                left="50%"
                transform={"translateX(-50%)"}
              />
              {sprintList.length === 0 ? null : (
                <Box position="absolute" left="14%" bottom="60px">
                  <Text color="#DE6E46" fontSize="30px">
                    共&nbsp;&nbsp;{score}&nbsp;&nbsp;點
                  </Text>
                </Box>
              )}
              {score >= 20 ? (
                <Image
                  width="171"
                  height="52"
                  w="135px"
                  h="32px"
                  src="/over.svg"
                  bottom="50px"
                  right="20px"
                />
              ) : null}
              <Droppable droppableId="sprint-list">
                {(provided, snapshot) => (
                  <div
                    style={{ height: "328px" }}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {sprintList.map((p, idx) => (
                      <Draggable draggableId={p.id} index={idx} key={p.id}>
                        {(provided, snapshot) => (
                          <Card
                            h="72px"
                            w="290px"
                            px="20px"
                            py="12px"
                            bg="white"
                            mb="10px"
                            display="flex"
                            direction="row"
                            align="center"
                            shadow="none"
                            border="1px solid #DE6E46"
                            color="#DE6E46"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Circle
                              size="35px"
                              bgColor="#DE6E46"
                              color="#FFFFFF"
                              mr="6px"
                            >
                              {p.score}
                            </Circle>
                            {p.title}
                          </Card>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
              <Button
                w="280px"
                borderRadius="45px"
                position="absolute"
                bottom="-30px"
                disabled={score >= 20 || sprintList.length === 0}
                onClick={onOpen}
              >
                我完成了
              </Button>
            </Flex>
          </Flex>
        </DragDropContext>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bgColor="transparent"
          display="flex"
          justifyContent="center"
          align="center"
          boxShadow="none"
        >
          <Flex direction="column" align="center">
            <Image
              width="615"
              height="615"
              w="480px"
              h="480px"
              src="/mousee.png"
              position="static"
              mb="30px"
            />

            <Button
              w="280px"
              borderRadius="45px"
              mb="40px"
              pointerEvents="none"
              boxShadow="md"
            >
              恭喜你完成了! 獲得逗貓鼠鼠一隻!
            </Button>
            <Link href="/">
              <Button w="280px" borderRadius="45px">
                回到首頁
              </Button>
            </Link>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
