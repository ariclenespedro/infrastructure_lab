import Image from "next/image";
import { schoolType } from "@/types/schools";
import React from "react";

interface TableDataStatsProps {
  SchoolData: Array<schoolType>;
}


const TableTwo: React.FC<TableDataStatsProps> = ({SchoolData}) => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-base-300">
        <th></th>
        <th>Designação</th>
        <th>Email</th>
        <th>Localização</th>
        <th>Total de Infraestruturas</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {SchoolData?.map((School, key) => (
        <tr>
            <th key={key}>1</th>
            <td>{School.designation}</td>
            <td>{School.email}</td>
            <td>{School.location}</td>
            <td>{School.total_infrastructure}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default TableTwo;
