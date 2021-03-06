import { useEffect, useState } from "react";
import axios from 'axios';

const FetchData = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try{
        const result = await axios(url);
        setData(result.data);

      } catch(error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);
  
  
  return [{data, isError, isLoading}];
}

export default FetchData;