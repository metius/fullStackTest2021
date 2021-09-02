import { fetchData } from "./fetchData";

export default getCountry = async (country='Italy') => {
  const countryData = await fetchData(country);
  return countryData;
}