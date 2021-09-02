import axios from "axios";

export const getCountries = async (str) => {
  const res = await axios.get(`https://restcountries.eu/rest/v2/name/${str}`);
  return res.data;  //res.data is an array of objects
};

  
