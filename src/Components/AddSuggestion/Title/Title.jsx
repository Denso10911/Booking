import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Title = ({ title, setTitle }) => {
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <Box component='form' fullWidth noValidate autoComplete='off' mt='20px'>
      <TextField
        id='outlined-multiline-flexible'
        label='Додайте короткий заголовок вашої пропозиції.'
        fullWidth
        maxRows={4}
        value={title}
        onChange={handleChange}
      />
    </Box>
  );
};

export { Title };
