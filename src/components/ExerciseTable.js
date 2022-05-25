import React, { useState } from "react";
import { Table } from "./Table";
import data from "../mock-data.json";

export const ExerciseTable = () => {
  const [rowData, setRowData] = useState(data);
  const [exercise, setExercise] = useState([]);

  const fetchExerciseData = () => {
    fetch("https://wger.de/api/v2/muscle/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformed = data.results.map((exerciseData) => {
          return {
            id: exerciseData.id,
            name: exerciseData.name,
          };
        });
        setExercise(transformed);
      });
  };

  fetchExerciseData();
  const rows = rowData[0].exercises.map((row) => {
    return Object.values(row);
  });

  const columns = ["Exercise Names", "Reps", "Sets"];

  return (
    <div>
      <Table columns={columns} rows={rows} />;
    </div>
  );
};
