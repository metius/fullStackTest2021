const SqlCreateDbCode = () => {

  const textStyle = {
    'textAlign': 'left',
  };

  return (
    <pre style={textStyle}>
      <p>create database casino;</p>
      <p>create table GameTypes(ID int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY (ID));</p>
      <p>create table Games(ID int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, typeID int NOT NULL, PRIMARY KEY (ID), FOREIGN KEY (typeID) REFERENCES GameTypes(ID));</p>
      <p>create table Countries(ID int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY (ID));</p>
      <p>create table Players(ID int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, favouriteID int, PRIMARY KEY (ID), FOREIGN KEY (favouriteID) REFERENCES Games(ID));</p>
      <p>create table GamesCountries(GameID int NOT NULL, CountryID int NOT NULL, FOREIGN KEY (GameID) REFERENCES Games(ID), FOREIGN KEY (CountryID) REFERENCES Countries(ID));</p>
    </pre>
  )
}

export default SqlCreateDbCode;