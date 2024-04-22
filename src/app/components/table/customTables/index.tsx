import { infrastructureType } from "@/types/infrastructure";
import Link from "next/link";
import React from "react";

interface TableDataStatsProps {
  data: Array<infrastructureType>;
  headers: Array<string>;
}

const TableInfrastructure: React.FC<TableDataStatsProps> = ({
  data,
  headers,
}) => {
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
          {data?.map((infrastructure, rowIndex) => (
            <tr key={rowIndex}>
              {/* Renderizando número da linha na primeira coluna */}
              <td>{rowIndex + 1}</td>
              {/* Renderizando link para a coluna Designação */}
              <td>{infrastructure.designation}</td>
              {/* Renderizando os valores das outras colunas dinamicamente */}
              {Object.values(infrastructure).map((value, cellIndex) =>
                // Se você não deseja que a primeira célula (ID) seja um link, você pode verificar o índice da célula
                // e adicionar o link apenas às células desejadas
                cellIndex !== 0 ? (
                  <td key={cellIndex}>
                    <input
                      className="input input-sm input-bordered input-primary"
                      type="number"
                      name=""
                      id=""
                      value={value}
                    />
                  </td>
                ) : null
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Botão de atualizar */}
      <div className="flex justify-end mt-4">
        <button className="btn btn-primary">Atualizar</button>
      </div>
    </div>
  );
};

export default TableInfrastructure;
