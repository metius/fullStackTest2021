import CountryCard from "../components/CountryCard/CountryCard.component";

const CountryCardPage = (props) => {
  const {country} = props.location.state;
  return(
    <CountryCard country={country} />    
  )
}

export default CountryCardPage;