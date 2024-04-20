'use client'
import { schoolType } from "@/types/schools";
import Main from "../components/main";
import Table from "../components/table";

export default function Home() {

  const schools: schoolType[] = [
    {
      designation: 'São José de Asis',
    email: 'asis@gmail.com',
    location: 'Camama, Luanda',
    total_infrastructure: 5
    },
  ];

  const headers = ["#", "Designação", "Email", "Localização", "Total de Infraestruturas"];

  return (
    <>
    <Main PageName="Escolas">
      <Table schoolData={schools} headers={headers} />
    </Main>
    </>
  );
}
