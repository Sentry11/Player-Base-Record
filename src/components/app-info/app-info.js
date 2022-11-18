import "./app-info.css";

const AppInfo = ({numOfteammate, increaseTeammate}) => {
  return(
        <div className="app-info">
            <h1 style = {{textAlign : "center"}}> Состав команды по волейболу  </h1>

            <h2> Общее число игроков: {numOfteammate} </h2>

            <h2>Премию получат: {increaseTeammate} </h2>
        </div>
    );
}

export default AppInfo;
