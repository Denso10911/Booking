import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Categories } from "./Categories";
import { Description } from "./Description";
import { Title } from "./Title";
import { Photos } from "./Photos";
import { Price } from "./Price";
import { Address } from "./Address";
import { addDoc } from "firebase/firestore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const AddSuggestion = ({ offerData, setOfferData, offersCollectionRef }) => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState([]);
  const [price, setPrice] = React.useState(0);
  const [categories, setСategories] = React.useState([
    {
      id: 1,
      title: "Flat",
    },
  ]);
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addNewOffer = async () => {
    debugger;
    await addDoc(offersCollectionRef, {
      categories: [{ id: categories[0].id, title: categories[0].title }],
      description: description,
      geometries: [{ coordinates: [coordinates.lng, coordinates.lat] }],
      title: title,
      img: selectedFile,
      price: price,
    });
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Здати в оренду</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Додайте інформацію про Ваше майно
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={"10px"}
            gap={"10px"}
          >
            <Categories categories={categories} setСategories={setСategories} />
            <Price price={price} setPrice={setPrice} />
          </Box>
          <Title title={title} setTitle={setTitle} />
          <Address
            address={address}
            setAddress={setAddress}
            setCoordinates={setCoordinates}
          />
          <Photos
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
          <Description
            description={description}
            setDescription={setDescription}
          />
          <Button variant='text' onClick={addNewOffer}>
            Додати пропозицію
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export { AddSuggestion };
