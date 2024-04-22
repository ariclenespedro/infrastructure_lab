'use client'
import TableInfrastructure from "@/app/components/table/customTables"; // Corrigido o nome do componente para seguir as convenções
import Main from "@/app/components/main";
import { useSearchParams } from "next/navigation";

import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from "react-redux";
import { getInfrastructureData  } from "@/redux/school/infrastructure/infrastructureAction";
import React, { useEffect, useState } from "react";

const Infraestruture: React.FC = (/* {
  getInfrastructureData, 
  infrastructure: { infrastructure_data, error, loading } }: any */) => {

  // Usar o useSearchParams para pegar os dados da URL
  const router = useSearchParams();

  /* const [DataInfrastructure, setDataInfrastructure] = useState<any | null>({
    Infraestrutures: loading === true ? "0" : infrastructure_data
  }); */

  /* useEffect( () => {
    async function fetchData() {
      try {
        const [infrastructure] = await Promise.all([
          getInfrastructureData(),
        ]);

        setDataInfrastructure({
          Infraestrutures: infrastructure?.payload || null,
        });

      } catch (error) {
        console.log('useeffect:',error);
      }
     
    }
    const intervalId = setInterval(fetchData, 5000); // 5 segundos

    // Chama fetchData inicialmente e limpa o intervalo quando o componente for desmontado
    fetchData();
    return () => clearInterval(intervalId);
  }, [getInfrastructureData]);

  console.log(DataInfrastructure); */

  const Infrastructures = [
    {
      designation: 'Sala de Informática',
      funcional: 2,
      nao_funcional: 1,
      total: 3,
    }
  ]

  const headers = ["#", "Designação", "Funcional", "Não Funcional", "Número Total"];

  const parameters = router.get('school_id');
  
  return (
    <>
      <Main PageName="Infraestruturas" school_id={parameters}>
        <TableInfrastructure data={Infrastructures} headers={headers}  />
      </Main>
    </>
  );
}

Infraestruture.propTypes = {
  getInfrastructureData: PropTypes.func.isRequired,
  infrastructure: PropTypes.object.isRequired,
};

const mapStateToProps = (state:any) =>({
  Infrastructure: state.infrastructure || {},
});

export default connect(mapStateToProps,{
  getInfrastructureData,
}) (Infraestruture);
