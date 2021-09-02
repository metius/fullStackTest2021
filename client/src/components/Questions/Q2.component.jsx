import CountryList from "../CountryList/CountryList.component";
import LoadingBar from "../LoadingBar/LoadingBar.component";
import ErrorComponent from "../ErrorComponent/ErrorComponent.component";
import FetchData from "../hooks/FetchData.component";

const Q2 = ({strings}) => {
  const [{data, isError, isLoading}] = FetchData(`q2/${JSON.stringify(strings)}`);

  return(
    <>
      <div className='content'>
        <h1>Question 2</h1>
        <p>From an array of string, it returns a list of countries where their name matches at least a part of one of these string. The results are unique (without duplicates)</p>
        <p>Currently using this array of strings:
          <span className='is-italic has-text-weight-bold'>{`[${strings}]`}</span>
        </p>
      </div>

      {isError && <ErrorComponent /> }

      {
        isLoading ? (
          <LoadingBar />
        ) : (
          <CountryList countries={data}/>
        )
      }
    </>
  )
}

export default Q2;