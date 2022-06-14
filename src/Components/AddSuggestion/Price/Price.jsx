import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Price = ({ price, setPrice }) => {
  const handleChange = (event) => {
    if (event.target.value >= 0) {
      setPrice(event.target.value);
    }
  };

  return (
    <Box>
      <TextField
        id='outlined-number'
        label='Ціна'
        type='number'
        value={price}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
};

export { Price };
