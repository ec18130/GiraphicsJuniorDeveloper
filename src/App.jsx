import "bootstrap/dist/css/bootstrap.css";
import logo from "./img/logo.png";
import marathonResults from "./MarathonResults.json";

import Athlete from "./components/Athelete";
import Marathon from "./components/Marathon";
import DownloadCSV from "./components/DownloadCSV";

function App() {
  let leaderboard = marathonResults.results;

  return (
    <div className="w-100">
      <header>
        <div className="bg-dark container-fluid d-inline-flex align-items-center">
          <div style={{ width: "70%" }}>
            <h1 className="display-3 fw-bold text-light">MARATHON RESULTS</h1>
          </div>
          <div style={{ width: "30%", height: "100%" }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "70%", marginLeft: "30%", height: "50%" }}
            />
          </div>
        </div>
        <Marathon leaderboard={leaderboard} />
      </header>
      <div className="container-fluid">
        <h3 className="fw-bold">Runners</h3>
        <div>
          <Athlete athletes={leaderboard.athletes} />
        </div>
        <DownloadCSV results={leaderboard.athletes} />
      </div>
    </div>
  );
}

export default App;
