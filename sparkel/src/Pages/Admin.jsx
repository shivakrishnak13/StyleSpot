import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { DiGoogleAnalytics } from "react-icons/di";
import { RiAdminFill, RiShoppingCartFill } from "react-icons/ri";
import { BsPencilSquare, BsPersonFillAdd } from "react-icons/bs";
import { useToast } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
export default function Admin() {
  const toast = useToast();
  const initialState = {
    title: "",
    gender: "",
    category: "",
    price: 0,
    brand: "",
    image: "",
    rating: "",
    image1: "",
    image2: "",
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [product, setProduct] = useState(initialState);
  const [data, setData] = useState([]);
  const [etitle, setetitle] = useState();
  const [eprice, seteprice] = useState();
  const [ebrand, setebrand] = useState();
  const formSubmit = (e) => {
    e.preventDefault();
    if (product.category == "") {
      alert("Select Category");
    } else {
      fetch("https://dapper-precious-sedum.glitch.me/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...product,
          discount: Math.floor(Math.random() * (50 - 20)) + 20,
          offer_price: Math.floor(
            product.price -
              ((Math.floor(Math.random() * (50 - 20)) + 20) / 100) *
                product.price
          ),
        }),
      });
      toast({
        title: "Data Added.",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-center",
      });
      document.getElementById("form").reset();
    }
  };
  useEffect(() => {
    fetch("https://dapper-precious-sedum.glitch.me/products")
      .then((res) => res.json())
      .then((deta) => setData(deta));
  });
  const onDelete = (e) => {
    toast({
      title: "Data Deleted.",
      status: "error",
      duration: 2000,
      isClosable: true,
      position: "top-center",
    });
    fetch(`https://dapper-precious-sedum.glitch.me/products/${e}`, {
      method: "DELETE",
    });
  };
  const Aa = (e) => {
    fetch(`https://dapper-precious-sedum.glitch.me/products/${e}`)
      .then((res) => res.json())
      .then((data) => {
        setetitle(data.title);
        setebrand(data.brand);
        seteprice(data.price);
      });
  };
  const onedit = (e) => {
    e.preventDefault();
    let obj = {
      title: etitle,
      price: +eprice,
      brand: ebrand,
    };
    fetch(`https://dapper-precious-sedum.glitch.me/products/${e}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    toast({
      position: "top-center",
      title: "Data has been updated",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <>
      <DIV>
        <Tabs
          variant="soft-rounded"
          colorScheme="blue"
          sx={{ display: "flex" }}
        >
          <TabList
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              width: "30%",
              padding: "20px",
              gap: "3%",
            }}
          >
            <Tab className="tab">
              <MdSpaceDashboard />
              Dashboard
            </Tab>
            <Tab className="tab">
              <IoMdAddCircle />
              Add Product
            </Tab>
            <Tab className="tab">
              <BsPencilSquare />
              Manage Product
            </Tab>
            <Tab className="tab">
              <BsPersonFillAdd />
              Add Admin
            </Tab>
            <Tab className="tab">
              <RiAdminFill />
              Manage Admin
            </Tab>
            <Tab className="tab">
              <RiShoppingCartFill />
              Manage Order
            </Tab>
            <Tab className="tab">
              <DiGoogleAnalytics />
              Analyse
            </Tab>
          </TabList>
          <TabPanels sx={{ margin: "1%" }}>
            <TabPanel id="dashboard">
              <p>one!</p>
            </TabPanel>
            <TabPanel className="addProduct">
              <form action="" onSubmit={formSubmit} id="form">
                <input
                  required
                  type="text"
                  placeholder="Title"
                  onChange={(e) =>
                    setProduct({ ...product, title: e.target.value })
                  }
                />
                <input
                  required
                  type="text"
                  placeholder="Brand"
                  onChange={(e) =>
                    setProduct({ ...product, brand: e.target.value })
                  }
                />
                <select
                  required
                  name=""
                  id=""
                  onChange={(e) =>
                    setProduct({ ...product, gender: e.target.value })
                  }
                >
                  <option value="null">Select Gender</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>
                <select
                  required
                  name=""
                  id=""
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                >
                  <option value="null">Select Category</option>
                  <option value="Shirts">Shirts</option>
                  <option value="T-Shirts">T-Shirts</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Kurtas">Kurtas</option>
                  <option value="Sarees">Sarees</option>
                  <option value="Dresses">Dresses</option>
                </select>
                <input
                  required
                  type="number"
                  placeholder="Price"
                  onChange={(e) =>
                    setProduct({ ...product, price: +e.target.value })
                  }
                />
                <input
                  required
                  type="number"
                  placeholder="Rating"
                  onChange={(e) =>
                    setProduct({ ...product, rating: e.target.value })
                  }
                />
                <input
                  required
                  type="url"
                  placeholder="Image"
                  onChange={(e) =>
                    setProduct({ ...product, image: e.target.value })
                  }
                />
                <input
                  required
                  type="url"
                  placeholder="Image-1"
                  onChange={(e) =>
                    setProduct({ ...product, image1: e.target.value })
                  }
                />
                <input
                  required
                  type="url"
                  placeholder="Image-2"
                  onChange={(e) =>
                    setProduct({ ...product, image2: e.target.value })
                  }
                />
                <button>Submit</button>
              </form>
            </TabPanel>
            <TabPanel id="editProduct">
              <TableContainer>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th sx={{ textAlign: "center" }}>Brand</Th>
                      <Th sx={{ textAlign: "center" }}>Category</Th>
                      <Th sx={{ textAlign: "center" }}>Price</Th>
                      <Th sx={{ textAlign: "center" }}>Image</Th>
                      <Th sx={{ textAlign: "center" }}>Rating</Th>
                      <Th sx={{ textAlign: "center" }}>Gender</Th>
                      <Th sx={{ textAlign: "center" }}>Edit</Th>
                      <Th sx={{ textAlign: "center" }}>Delete</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.map((e) => (
                      <Tr>
                        <Td sx={{ textAlign: "center" }}>{e.brand}</Td>
                        <Td sx={{ textAlign: "center" }}>{e.category}</Td>
                        <Td sx={{ textAlign: "center" }}>{e.price}</Td>
                        <Td sx={{ textAlign: "center" }}>
                          <img
                            src={e.image}
                            width="50%"
                            style={{ display: "block", margin: "auto" }}
                            alt=""
                          />
                        </Td>
                        <Td sx={{ textAlign: "center" }}>{e.rating}</Td>
                        <Td sx={{ textAlign: "center" }}>{e.gender}</Td>
                        <Td sx={{ textAlign: "center" }}>
                          <button
                            onClick={() => {
                              onOpen();
                              Aa(e.id);
                            }}
                            id="edit"
                          >
                            Edit
                          </button>
                        </Td>
                        <Td sx={{ textAlign: "center" }}>
                          <button onClick={() => onDelete(e.id)} id="delete">
                            Delete
                          </button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Edit Product</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <form action="" onSubmit={formSubmit} id="form">
                      <input
                        required
                        type="text"
                        value={etitle}
                        placeholder="Title"
                        onChange={(e) => setetitle(e.target.value)}
                      />
                      <input
                        required
                        type="text"
                        value={ebrand}
                        placeholder="Brand"
                        onChange={(e) => setebrand(e.target.value)}
                      />
                      <input
                        required
                        type="text"
                        placeholder="Price"
                        value={eprice}
                        onChange={(e) => seteprice(e.target.value)}
                      />
                      <Button variant="ghost" onClick={onedit}>
                        Edit
                      </Button>
                    </form>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </DIV>
    </>
  );
}
const DIV = styled.div`
  .tab {
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 5px;
    color: black;
  }
  .addProduct form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 80vh;
    input,
    select {
      width: 35%;
      border: 2px solid black;
      height: 60px;
      padding: 10px;
      font-size: 18px;
      border-radius: 5px;
    }
    button {
      background-color: #bee3f8;
      font-size: 18px;
      color: #2c5282;
      border-radius: 20px;
      font-weight: 700;
      padding: 5px 20px 5px 20px;
    }
  }
  #edit {
    background-color: green;
    padding: 5px 20px 5px 20px;
    color: white;
    border-radius: 5px;
    font-weight: 600;
  }
  #delete {
    background-color: red;
    padding: 5px 20px 5px 20px;
    color: white;
    border-radius: 5px;
    font-weight: 600;
  }
`;
