import { infrastructureType } from "@/types/infrastructure";
import Link from "next/link";
import React, { useState } from "react";

import { updateInfrastructure, getInfrastructureData  } from "@/redux/school/infrastructure/infrastructureAction";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";



interface TableDataStatsProps {
  data: Array<infrastructureType>;
  headers: Array<string>;
}

const TableInfrastructure: React.FC<TableDataStatsProps> = ({
  data,
  headers,
}) => {

  const router = useSearchParams();
  const parameters = router.get('school_id');

  const dispatch = useDispatch();
    // Estado para armazenar os dados da tabela
    const [Data, setData] = React.useState<Array<infrastructureType>>([]);
   


    React.useEffect(()=>{
      setData(data);
    },[data]);
    //console.log( {Data,data});
  const handleChange = (e, row, field) => {

   // let newData: Array<infrastructureType> = [...Data];
    const rowIndex = Data.findIndex(item => item._id === row);
    if (rowIndex !== -1) {
      // Cria uma nova cópia do objeto a ser atualizado
      const updatedItem = field ==='funcional'? { ...data[rowIndex], funcional: e.target.value } : field ==='nao_funcional'? { ...data[rowIndex], nao_funcional: e.target.value } : { ...data[rowIndex], total: e.target.value };
      // Cria uma nova cópia do array e substitui o objeto atualizado
      const newData = [...data.slice(0, rowIndex), updatedItem, ...data.slice(rowIndex + 1)];

      console.log(newData);
      setData(newData);
    }

  };

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
          {Data?.map((infrastructure, rowIndex) => (
            <tr key={rowIndex}>
              {/* Renderizando número da linha na primeira coluna */}
              <td>{rowIndex + 1}</td>
              {/* Renderizando link para a coluna Designação */}
              <td>{infrastructure.designation}</td>
              <td>
                {
                  <input
                    className="input input-sm input-bordered input-primary"
                    type="number"
                    name="funcional"
                    id="funcional"
                    /* value={infrastructure.funcional} */
                    onChange={(e) => handleChange(e, infrastructure._id, 'funcional')}
                    defaultValue={infrastructure.funcional}
                  />
                }
              </td>
              <td>
                {
                  <input
                    className="input input-sm input-bordered input-primary"
                    type="number"
                    name="nao_funcional"
                    id="nao_funcional"
                    onChange={(e) => handleChange(e, infrastructure._id, 'nao_funcional')}
                    defaultValue={infrastructure.nao_funcional}
                  />
                }
              </td>
              <td>
                {
                  <input
                    className="input input-sm input-bordered input-primary"
                    type="number"
                    name=""
                    id=""
                    value={infrastructure.total}
                  />
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Botão de atualizar */}
      <div className="flex justify-end mt-4">
      <button onClick={async () => {Data.map((item,__)=>{
         const res = dispatch(updateInfrastructure({
          id: item._id, funcional: item.funcional, nao_funcional: item.nao_funcional, total: item.total
         })
         )
         dispatch(getInfrastructureData(parameters));
      
      })}} className="btn btn-primary">Atualizar</button>
    </div>
    </div>
  );
};

export default TableInfrastructure;
