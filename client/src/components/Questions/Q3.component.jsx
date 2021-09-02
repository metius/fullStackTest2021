import CountryListWithSearch from "../CountryList/CountryListWithSearch.component";
import LoadingBar from "../LoadingBar/LoadingBar.component";
import ErrorComponent from "../ErrorComponent/ErrorComponent.component";
import FetchData from "../hooks/FetchData.component";

const Q3 = ({url='https://restcountries.eu/rest/v2/all'}) => {
  const [{data, isError, isLoading}] = FetchData(url);
  
  return(
    <>
      <div className='content'>
        <h1>Question 3</h1>
        <p>Get the list of all countries and add a field to filter them by name</p>
      </div>
      
      {isError && <ErrorComponent /> }

      {
        isLoading ? (
          <LoadingBar />
        ) : (
          <CountryListWithSearch countries={data}/>
        )
      }
    </>
  )
}

export default Q3;