import React from "react";
import Image from "next/image";
import { schoolType } from "@/types/schools";

interface TableDataStatsProps {
  schoolData: Array<schoolType>;
  headers: Array<string>;
}

const TableTwo: React.FC<TableDataStatsProps> = ({ schoolData, headers }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr className="bg-base-300">
            {/* Renderizando cabeçalhos dinamicamente */}
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Renderizando dados */}
          {schoolData.map((school, rowIndex) => (
            <tr key={rowIndex}>
              {/* Renderizando número da linha na primeira coluna */}
              <td>{rowIndex + 1}</td>
              {/* Mapeando os valores das outras colunas dinamicamente */}
              {Object.values(school).map((value, cellIndex) => (
                <td key={cellIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTwo;
