import CountryCard from '../CountryCard/CountryCard.component';
import LoadingBar from '../LoadingBar/LoadingBar.component';
import ErrorComponent from "../ErrorComponent/ErrorComponent.component";
import FetchData from '../hooks/FetchData.component';
import { useEffect, useState } from 'react';

const Q1 = ({country}) => {
  const [cardData, setCardData] = useState({})
  const [{data, isError, isLoading}] = FetchData(`/q1/${country}`);

  useEffect(() => {
    setCardData(data[0])
  }, [data])
  
  return(
    <>
      <div className='content'>
        <h1>Question 1</h1>
        <p>Gets a unique country from a specific name given</p>
      </div>

      {isError && <ErrorComponent /> }

      {
        isLoading ? (
          <LoadingBar />
        ) : (
          <CountryCard country={cardData} />
        )
      }      
    </>
  )
}

export default Q1;