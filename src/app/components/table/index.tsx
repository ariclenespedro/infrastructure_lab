import React from "react";
import Link from "next/link";
import { schoolType } from "@/types/schools";

interface TableDataStatsProps {
  schoolData: Array<schoolType>;
  headers: Array<string>;
}

const TableTwo: React.FC<TableDataStatsProps> = ({ schoolData, headers }) => {
  console.log("Array:",schoolData);

  const Data = schoolData?.map(item => ({
    designation: item.designation,
    email: item.email,
    location: item.location,
    id: item._id,
  }));

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
          {Data?.map((school, rowIndex) => (
            <tr key={rowIndex}>
              {/* Renderizando número da linha na primeira coluna */}
              <td>{rowIndex + 1}</td>
              {/* Renderizando link para a coluna Designação */}
              <td>
                <Link className="link link-info" href={
                  {
                    pathname:"/infraestruturas",
                    query: {school_id: school.id}
                  }
                  
                }
                  >
                  {school.designation}
                </Link>
              </td>
              <td> {school.email}</td>
              <td> {school.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTwo;
