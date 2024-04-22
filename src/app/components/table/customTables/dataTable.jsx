import React, { useMemo } from 'react';
import { useTable, usePagination, useSortBy, useFilters, useGlobalFilter } from 'react-table';

// Exemplo de dados para a DataTable
const data = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Doe', age: 35 },
];

const handleChange = (e, row, field) => {
  const newData = [...data];
  const rowIndex = data.findIndex(item => item.id === row.original.id);
  newData[rowIndex][field] = e.target.value;
  setData(newData);
};

const DataTable = () => {
  // Defina as colunas da DataTable
  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name', Cell: ({ row }) =>    
      <input
      className="input input-sm input-bordered input-primary"
      type="number"
      name="testName"
      id="testName"
      onChange={(e) => handleChange(e, row, 'name')}
      defaultValue={row.original.age}
    /> },
      { Header: 'Age', accessor: 'age', Cell: ({ row }) => <input defaultValue={row.original.age} /> },
    ],
    []
  );

  // Use a função useTable para criar a DataTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
  } = useTable({ columns, data }, useFilters, useGlobalFilter, useSortBy, usePagination);

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button onClick={() => console.log(data)} className="btn btn-primary">Atualizar</button>
      </div>
    </div>
  );
};

export default DataTable;
