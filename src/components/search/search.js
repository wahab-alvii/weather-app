import React, { useEffect, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../Api";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// const Search = ({ onSearchChange }) => {
//   const [search, setSearch] = useState(null);

//   const [row, setrow] = useState(null);

//   const loadOptions = (inputValue) => {
//     return fetch(
//       `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
//       geoApiOptions
//     )
//       .then((response) => response.json())

//       .then((response) => {
//         return {
//           options: response.data.map((city) => {
//             return {
//               value: `${city.latitude} ${city.longitude} `,
//               label: `${city.name}, ${city.countryCode}  `,
//             };
//           }),
//         };
//       })

//       .catch((err) => console.error(err));
//   };

//   const handleOnChange = (searchData) => {
//     setSearch(searchData);
//     onSearchChange(searchData);
//   };

//   console.log(loadOptions);
//   return (
//     <>
//       <Autocomplete
//         // disablePortal
//         id="combo-box-demo"
//         // options={geoApiOptions}
//         // sx={{ width: 300 }}
//         renderInput={(params) => <TextField {...params} label="Movie" />}
//       />

//       {/*
//       <AsyncPaginate
//         placeholder="Search for City"
//         debounceTimeout={600}
//         value={search}
//         onChange={handleOnChange}
//         loadOptions={loadOptions}
//       /> */}
//     </>
//   );
// };

// export default Search;

//

// const Search = ({ onSearchChange }) => {
//   const [search, setSearch] = useState(null);
//   const [data, setData] = useState(null);

//   const [row, setrow] = useState(null);

//   useEffect((inputValue) => {
//     return (
//       fetch(
//         `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
//         geoApiOptions
//       )
//         .then((response) => response.json())
//         .then((data) => setData(data))

//         // .then((response) => {
//         //   return {
//         //     options: response.data.map((city) => {
//         //       return {
//         //         value: `${city.latitude} ${city.longitude} `,
//         //         label: `${city.name}, ${city.countryCode}  `,
//         //       };
//         //     }),
//         //   };
//         // })

//         .catch((err) => console.error(err))
//     );
//   });
//   const handleOnChange = (searchData) => {
//     setSearch(searchData);
//     onSearchChange(searchData);
//   };

//   // console.log(loadOptions);
//   return (
//     <>
//       <Autocomplete
//         // disablePortal
//         id="combo-box-demo"
//         options={data}
//         // sx={{ width: 300 }}
//         renderInput={(params) => <TextField {...params} label="Hi" />}
//       />

//       {/*
//       <AsyncPaginate
//         placeholder="Search for City"
//         debounceTimeout={600}
//         value={search}
//         onChange={handleOnChange}
//         loadOptions={loadOptions}
//       /> */}
//     </>
//   );
// };

const Search = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://swapi-deno.azurewebsites.net/api/starships")
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  return (
    <Autocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.name}
      // sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Hi" />}
    />
  );
};

export default Search;
