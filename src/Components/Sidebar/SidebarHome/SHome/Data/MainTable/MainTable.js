import React from "react";

const MainTable = ({ getTableProps, getTableBodyProps, headerGroups, prepareRow, page }) => {
  return <table
    {...getTableProps()}
    className="table table-striped table-hover text-center fs-5 table-bordered border-dark col-12"
  >
    <thead>
      {
        headerGroups.map((head) => {
          return (
            <tr key={head.id} {...head.getHeaderGroupProps()}>
              {
                head.headers.map((col) => {
                  return <th
                    key={head.id} {...col.getHeaderProps(col.getSortByToggleProps())}
                    className="bg-primary text-white fs-2">
                    {col.render("Header")}
                    <span className="bg-danger" >
                      {col.isSorted // true if the column is sorted at this monent
                        ? col.isSortedDesc // for deciding the direction of the sorting
                          ? " 🔽" // descending
                          : " 🔼" //ascending
                        : ""}
                    </span>
                  </th>
                })
              }
            </tr >
          );
        })}
    </thead>
    <tbody {...getTableBodyProps()}>
      {page.map((row) => {
        prepareRow(row);
        return (
          <>
            < tr key={row.id} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                );
              })}
            </tr>
          </>
        );
      })
      }
    </tbody >
  </table >
};

export default MainTable;
