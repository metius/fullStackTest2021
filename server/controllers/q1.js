import {getCountries} from '../helpers/helpers.js';

const q1 = async (req, res) => {
  const {country} = req.params;
  const getCountry = await getCountries(country);
  res.send(getCountry)
}

export default q1;