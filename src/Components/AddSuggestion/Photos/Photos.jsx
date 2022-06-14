import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { FiCamera } from "react-icons/fi";
import { ImageList, ImageListItem } from "@mui/material";

const Input = styled("input")({
  display: "none",
});

const Photos = ({ selectedFile, setSelectedFile }) => {
  const handleCapture = (event) => {
    if (event.target.files.length > 1) {
      let photosArr = [];
      for (let i = 0; i < event.target.files.length; i++) {
        photosArr.push(URL.createObjectURL(event.target.files[i]));
      }
      setSelectedFile(photosArr);
    }
  };
  return (
    <Stack direction='column' alignItems='center' spacing={2} mt={"20px"}>
      <label htmlFor='icon-button-file'>
        <Input
          accept='image/*'
          id='icon-button-file'
          type='file'
          multiple
          onChange={handleCapture}
        />
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='span'
        >
          <FiCamera />
        </IconButton>
      </label>
      {!!selectedFile.length && (
        <ImageList cols={4} rowHeight={164}>
          {selectedFile.map((el, index) => {
            return (
              <ImageListItem key={index}>
                <img src={el} alt='' />
              </ImageListItem>
            );
          })}
        </ImageList>
      )}
    </Stack>
  );
};

export { Photos };
