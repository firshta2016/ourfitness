import React, { useState } from "react";
import { Table } from "./Table";
import data from "../mock-data.json";

export const ExerciseTable = () => {
  const [rowData, setRowData] = useState(data);
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
