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
import { storage } from "../../firebase.config";
import { ref, uploadBytes } from "firebase/storage";
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
const AddSuggestion = ({ offersCollectionRef, setLoading }) => {
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

  const uploadImage = async (selectedFile, offer) => {
    if (selectedFile.length === 0) return;
    selectedFile.forEach((el) => {
      const imageRef = ref(storage, `${offer}/${el.name}`);
      uploadBytes(imageRef, el);
    });
  };

  const addNewOffer = async () => {
    setLoading(true);
    const offer = Date.now();
    await uploadImage(selectedFile, offer);
    await addDoc(offersCollectionRef, {
      offer: offer,
      categories: [{ id: categories[0].id, title: categories[0].title }],
      description: description,
      geometries: [{ coordinates: [coordinates.lng, coordinates.lat] }],
      title: title,
      price: price,
    });
    setLoading(false);
    setOpen(false);
    setTitle("");
    setDescription("");
    setSelectedFile([]);
    setPrice(0);
    setСategories([
      {
        id: 1,
        title: "Flat",
      },
    ]);
    setAddress("");
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
