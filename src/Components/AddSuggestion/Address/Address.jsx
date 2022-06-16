import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Address = React.memo(({ address, setAddress, setCoordinates }) => {
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <Box component='form' fullWidth mt={"20px"}>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={{ types: ["address"] }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              id='outlined-multiline-flexible'
              label='Введіть повну адресу вашої нерухомості'
              fullWidth
              {...getInputProps({
                placeholder:
                  "Голосіївский проспект, 112, квартира 61, Київ, Україна",
              })}
            />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion, index) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                };

                return (
                  <div
                    {...getSuggestionItemProps(suggestion, { style })}
                    key={index}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </Box>
  );
});

export { Address };
