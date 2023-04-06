import React from "react";

const DownloadCSV = (props) => {
  let convertedCSV = false;
  const format = Object.keys(props.results[0]);
  const orderedFormat = [];
  const dataEntries = Object.values(props.results);

  const convertCSV = () => {
    if (convertedCSV === false) {
      for (let i = 0; i < dataEntries.length; i++) {
        let temp = Object.keys(dataEntries[i]).toString().toLocaleLowerCase();
        if (
          temp !== "rank" &&
          temp !== "firstname" &&
          temp !== "surname" &&
          temp !== "finishtime" &&
          temp !== "flag"
        ) {
          delete dataEntries[i].athleteid;
          delete dataEntries[i].bibnumber;
          delete dataEntries[i].teamname;
          delete dataEntries[i].raceprogress;
          delete dataEntries[i].countryname;
        }

        dataEntries[i].firstname =
          dataEntries[i].firstname + " " + dataEntries[i].surname;
        delete dataEntries[i].surname;
      }

      for (let i = 0; i < format.length; i++) {
        let temp = format[i].toString().toLocaleLowerCase();

        if (temp === "rank") {
          orderedFormat.push(format[i]);
        }
        if (temp === "firstname") {
          format[i] = "full name";
          orderedFormat.push(format[i]);
        }
        if (temp === "surname") {
          format.splice(i, 1);
        }
        if (temp === "finishtime") {
          format[i] = "finish time";
          orderedFormat.push(format[i]);
        }
        if (temp === "flag") {
          format[i] = "country code";
          orderedFormat.push(format[i]);
        }
      }
      convertedCSV = true;
    }

    const main = dataEntries.map((entry) => {
      return Object.values(entry).toString();
    });

    const csv = [orderedFormat.toString().toUpperCase(), ...main].join("\n");
    downloadCSV(csv);
  };

  const downloadCSV = (input) => {
    const url = window.URL.createObjectURL(
      new Blob([input], { type: "application/csv" })
    );
    const link = document.createElement("a");
    link.href = url;
    link.style.display = "none";
    link.download = "race_results.csv";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button
        onClick={convertCSV}
        type="button"
        className="btn btn-lg btn-dark fw-bold"
        style={{ borderRadius: "0" }}
      >
        Download Table
      </button>
    </div>
  );
};

export default DownloadCSV;
