'use client'
import TableInfrastructure from "@/app/components/table/customTables"; // Corrigido o nome do componente para seguir as convenções
import Main from "@/app/components/main";
import { useSearchParams } from "next/navigation";

import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from "react-redux";
import { getSchoolsData  } from "@/redux/school/schoolActions";
import { useEffect, useState } from "react";

export default function Infraestruture() {
  // Usar o useSearchParams para pegar os dados da URL
  const router = useSearchParams();

  const headers = ["#", "Designação", "Funcional", "Não Funcional", "Número Total"];

  const Infrastructures = [
    {
      designation: 'Sala de Informática',
      funcional: 2,
      nao_funcional: 1,
      total: 3,
    }
  ]

  const parameters = router.get('school_id');
  
  return (
    <>
      <Main PageName="Infraestruturas" school_id={parameters}>
        <TableInfrastructure data={Infrastructures} headers={headers}  />
      </Main>
    </>
  );
}

