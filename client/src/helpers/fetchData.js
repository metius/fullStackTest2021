export const URL = 'https://restcountries.eu/rest/v2'

export const catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

export const fetchData = (req) => {
  
}