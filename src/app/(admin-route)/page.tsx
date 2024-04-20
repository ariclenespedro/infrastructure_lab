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
  return (
    <>
    <Main PageName="Escolas">
      <Table SchoolData={schools} />
    </Main>
    </>
  );
}
