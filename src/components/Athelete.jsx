import React, { useState } from "react";

const Athlete = (prop) => {
  const [getAthlete, setAthlete] = useState(prop.athletes);
  const [order, setOrder] = useState("asc");

  const sortRank = () => {
    const sortedAthletes = [...getAthlete].sort((a, b) => {
      if (order === "asc") {
        setOrder("desc");
        if (a.rank < b.rank) {
          return 1;
        } else {
          return -1;
        }
      } else {
        setOrder("asc");
        if (a.rank > b.rank) {
          return 1;
        } else {
          return -1;
        }
      }
    });
    setAthlete(sortedAthletes);
  };

  const sortRunnerNum = () => {
    const sortedAthletes = [...getAthlete].sort((a, b) => {
      if (order === "asc") {
        setOrder("desc");
        if (parseInt(a.bibnumber) > parseInt(b.bibnumber)) {
          return 1;
        } else {
          return -1;
        }
      } else {
        setOrder("asc");
        if (parseInt(a.bibnumber) < parseInt(b.bibnumber)) {
          return 1;
        } else {
          return -1;
        }
      }
    });
    setAthlete(sortedAthletes);
  };

  return (
    <div className="table-responsive-lg">
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr className="text-uppercase">
            <th className="th-sm">
              Rank
              <button
                onClick={sortRank}
                type="button"
                className="link-light fa fa-fw fa-sort"
                style={{
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              ></button>
            </th>
            <th className="th-sm">
              Runner Num
              <button
                type="button"
                onClick={sortRunnerNum}
                className="link-light fa fa-fw fa-sort"
                style={{
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              ></button>
            </th>
            <th className="th-sm">Athlete</th>
            <th className="th-sm">Team</th>
            <th className="th-sm">Completed Time</th>
          </tr>
        </thead>

        <tbody>
          {getAthlete.map((athlete) => {
            return (
              <tr key={athlete.athleteid}>
                <th scope="row">{athlete.rank}</th>
                <td>{athlete.bibnumber}</td>
                <td>
                  <strong>{athlete.flag}</strong> - {athlete.firstname}{" "}
                  {athlete.surname}
                </td>
                <td>{athlete.teamname}</td>
                <td>{athlete.finishtime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Athlete;
