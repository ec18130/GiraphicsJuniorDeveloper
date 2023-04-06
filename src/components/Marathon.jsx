import React from "react";

const Marathon = (props) => {
  const formatDate = (date) => {
    let d = new Date(date);
    return d.toDateString();
  };
  return (
    <div className="d-flex justify-content-between text-capitalize small bg-warning">
      <div>
        <p className="m-1">
          <strong>Race Status:</strong> {props.leaderboard.raceStatus}
        </p>
      </div>

      <div>
        <p className="m-1">
          <strong> Gender</strong>: {props.leaderboard.gender}
        </p>
      </div>

      <div>
        <p className="m-1">
          <strong>Race Name:</strong> {props.leaderboard.racename}
        </p>
      </div>

      <div>
        <p className="m-1">
          <strong>Race Distance:</strong> {props.leaderboard.racelength}
        </p>
      </div>
      <div>
        <p className="m-1">
          <strong>Time:</strong> {formatDate(props.leaderboard.tod)}
        </p>
      </div>

      <div>
        <p className="m-1">
          <strong>Last Updated:</strong>{" "}
          {formatDate(props.leaderboard.lastupdated)}
        </p>
      </div>
    </div>
  );
};

export default Marathon;
