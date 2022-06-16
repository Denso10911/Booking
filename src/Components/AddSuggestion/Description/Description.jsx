import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Description = React.memo(({ description, setDescription }) => {
  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Box component='form' fullWidth noValidate autoComplete='off' mt='20px'>
      <TextField
        id='outlined-multiline-flexible'
        label='Додайте детальний опис будь ласка.'
        multiline
        fullWidth
        maxRows={4}
        value={description}
        onChange={handleChange}
      />
    </Box>
  );
});

export { Description };
