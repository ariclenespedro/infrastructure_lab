import React from "react";
import Link from "next/link";
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
              {/* Renderizando link para a coluna Designação */}
              <td>
                <Link className="link link-info" href={`/infraestruturas`}>
                  {school.designation}
                </Link>
              </td>
              {/* Renderizando os valores das outras colunas dinamicamente */}
              {Object.values(school).map((value, cellIndex) => (
                // Se você não deseja que a primeira célula (ID) seja um link, você pode verificar o índice da célula
                // e adicionar o link apenas às células desejadas
                cellIndex !== 0 ? <td key={cellIndex}>{value}</td> : null
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTwo;
