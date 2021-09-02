import {getCountries} from '../helpers/helpers.js';

const q2 = async (req, res) => {
  const {strings} = req.params;
  const arrStr = JSON.parse(strings);

  //let's loop over the array of strings and get an array of Countries (objects)
  const countriesList = arrStr.map((string) => getCountries(string));
  const result = await Promise.all(countriesList);

  //removing the duplicates before to send back the data
  res.send(Array.from(new Set((result.flat(2)).map(JSON.stringify))).map(JSON.parse))
  }

export default q2;