import LinkCard from "../components/LinkCard/LinkCard.component";

const HomePage = () => {
  return(
    <div className='tile is-anchestor'>
      <div className='tile'>
        <LinkCard question='1'/>
      </div>
      <div className='tile'>
        <LinkCard question='2'/>
      </div>
      <div className='tile'>
        <LinkCard question='3'/>
      </div>
      <div className='tile'>
        <LinkCard question='4'/>
      </div>
      <div className='tile'>
        <LinkCard question='5'/>
      </div>
    </div>
  )
}

export default HomePage;
