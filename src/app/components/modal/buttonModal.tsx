

import React, { useState } from "react";
import Modal from ".";

 const ButtonModal: React.FC = () => {

  // manipular o comportamento da modal(open/close)
  const [openModal, setOpenModal] = useState(false);

  const handleState = (open:boolean) => {
    setOpenModal(open);
  };

  return (
    <>
     
      <Modal state={openModal} handleState={handleState} />
      <button
        onClick={() => setOpenModal(true)}
        className=" btn btn-primary"
      >
        Nova Escola
      </button>
    </>
    
  );
}

export default ButtonModal;
