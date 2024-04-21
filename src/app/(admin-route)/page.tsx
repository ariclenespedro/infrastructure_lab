'use client'
import { schoolType } from "@/types/schools";
import Main from "../components/main";
import Table from "../components/table";

import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from "react-redux";
import { getSchoolsData  } from "@/redux/school/schoolActions";
import { useEffect, useState } from "react";



const Home: React.FC = ({ 
  getSchoolsData, 
  school: { school_data, error, loading }}: any) => {


    const [DataSchool, setDataSchool] = useState<any | null>({
      schools: loading === true ? "0" : school_data
    });

    useEffect( () => {
      async function fetchData() {
        try {
          const [school] = await Promise.all([
            getSchoolsData(),
          ]);
  
          setDataSchool({
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
    }, [getSchoolsData]);

    console.log(DataSchool)


  const headers = ["#", "Designação", "Email", "Localização"];

  return (
    <>
    <Main PageName="Escolas">
      <Table schoolData={DataSchool.schools.data} headers={headers} />
    </Main>
    </>
  );
}

Home.propTypes = {
  getSchoolsData: PropTypes.func.isRequired,
  school: PropTypes.object.isRequired,
};

const mapStateToProps = (state:any) =>({
  school: state.school || {},
});

export default connect(mapStateToProps,{
  getSchoolsData,
}) (Home);