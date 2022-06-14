import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Categories = ({ categories, setСategories }) => {
  const handleChange = (event) => {
    switch (event.target.value) {
      case "Flat":
        setСategories([
          {
            id: 1,
            title: "Flat",
          },
        ]);
        break;
      case "Room":
        setСategories([
          {
            id: 2,
            title: "Room",
          },
        ]);
        break;

      default:
        setСategories([
          {
            id: 3,
            title: "House",
          },
        ]);
        break;
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Що ви здаєте?</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={categories[0].title}
          label='Виберіть категорію'
          onChange={handleChange}
        >
          <MenuItem value={"Flat"}>Квартира</MenuItem>
          <MenuItem value={"Room"}>Кімната</MenuItem>
          <MenuItem value={"House"}>Будинок</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export { Categories };
