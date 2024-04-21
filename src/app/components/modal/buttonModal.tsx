

import React, { useState } from "react";
import Modal from ".";
import SchoolForm from "../form/SchoolForm";
import InfrastructureForm from "../form/InfrastructureForm";
import { usePathname } from "next/navigation";



 const ButtonModal: React.FC = () => {

  const [modalForm, setModalForm] = useState<React.ReactNode | null>(null);

  const pathname = usePathname();

  function handleNavigationButton() {
    if (pathname === "/") {
      setModalForm(<SchoolForm />);
      console.log('click navigation');
      
    }
    if (pathname === "/infraestruturas") {
      setModalForm(<InfrastructureForm />);
      
      
    }
  }

  // manipular o comportamento da modal(open/close)
  const [openModal, setOpenModal] = useState(false);

  const handleState = (open:boolean) => {
    setOpenModal(open);
  };

  return (
    <>
     
      <Modal state={openModal} handleState={handleState} formComponent={modalForm} />
      <button
        onClick={() => {
          setOpenModal(true);
          handleNavigationButton();
         }}
        className=" btn btn-primary"
      >
        Nova 
      </button>
    </>
    
  );
}

export default ButtonModal;
