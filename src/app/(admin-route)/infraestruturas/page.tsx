'use client'
import { schoolType } from "@/types/schools";
import TableInfrastructure from "@/app/components/table/customTables"; // Corrigido o nome do componente para seguir as convenções
import Main from "@/app/components/main";

import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from "react-redux";
import { getSchoolsData  } from "@/redux/school/schoolActions";
import { getInfrastructureData } from "@/redux/school/infrastructure/infrastructureAction";
import { useEffect, useState } from "react";
import TableTwo from "@/app/components/table";


import { useSearchParams } from "next/navigation";


const Infraestruture: React.FC = ({ 
  getInfrastructureData, 
  infrastructure: { infrastructure_data, error, loading }}: any) => {

  // Usar o useSearchParams para pegar os dados da URL
  const router = useSearchParams();
  const parameters = router.get('school_id');



    const [DataInfrastructure, setDataInfrastructure] = useState<any | null>({
      schools: loading === true ? "0" : infrastructure_data
    });

    useEffect( () => {
      async function fetchData() {
        try {
          const [school] = await Promise.all([
            getInfrastructureData(parameters),
          ]);
  
          setDataInfrastructure({
            schools: school?.payload || null,
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

    console.log(DataInfrastructure)


    const headers = ["#", "Designação", "Funcional", "Não Funcional", "Número Total"];

  return (
    <>
    <Main PageName="Escolas" school_id={parameters} >
      <TableInfrastructure data={DataInfrastructure.schools.data} headers={headers} />
    </Main>
    </>
  );
}

Infraestruture.propTypes = {
  getInfrastructureData: PropTypes.func.isRequired,
  infrastructure: PropTypes.object.isRequired,
};

const mapStateToProps = (state:any) =>({
  infrastructure: state.infrastructure || {},
});

export default connect(mapStateToProps,{
  getInfrastructureData,
}) (Infraestruture);