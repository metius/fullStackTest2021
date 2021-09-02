import RenderList from './RenderList.component';

const CountryList = ({countries}) => {

  return(
    <div className='card'>
      <header className="card-header">
        <p className="card-header-title">
          Countries
        </p>
      </header>
      <RenderList list={countries} />
    </div>
  )
}

export default CountryList;