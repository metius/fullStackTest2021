const SqlGetPlayers = () => {

  const textStyle = {
    'textAlign': 'left',
  };

  return (
    <pre style={textStyle}>
      <p>
      select p.name <br />
      rom Players as p join Games as g on p.favouriteID = g.ID <br />
      where g.typeID = ( <br />
        select ID <br />
        from GameTypes <br />
        where name = 'SLOT' <br />
      );
      </p>
    </pre>
  )
}

export default SqlGetPlayers;