'use client'

import FormInfrastructure from "@/app/components/form";
import Main from "@/app/components/main";
import { useSearchParams } from "next/navigation";

export default function Infraestruture() {

  // usar o useSearchParams para pegar os dados da URL
  const router = useSearchParams();

    const parameters = router.get('school_id');
    /* console.log('params:',parameters); */
  return (
    <>
    <Main PageName="Infraestruturas" school_id = {parameters} >
      <FormInfrastructure/>
    </Main>
    </>
  );
}
