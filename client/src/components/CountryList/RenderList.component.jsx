import RenderLine from "./RenderLine.component"

const RenderList = ({list}) => {
  return(
    <div className="card-content">
      <div className="content ">
        {
        list.map((country) =>           
          <RenderLine country={country} key={country.alpha3Code} />
        )}
      </div>
    </div>
  )
}

export default RenderList