import * as React from "react";

export const Table = ({ columns, rows }) => {
  const columnElements = columns.map((key, index) => (
    <th key={index}>{key.toUpperCase()}</th>
  ));

  const createRow = (rowItems) => {
    const tds = rowItems.map((item, index) => <td key={index}>{item}</td>);
    return <tr>{tds}</tr>;
  };
  const rowElements = rows.map(createRow);

  return (
    <div className="table-container">
      <table id="workouts" className="center">
        <thead>{columnElements}</thead>
        <tbody>{rowElements}</tbody>
      </table>
    </div>
  );
};
