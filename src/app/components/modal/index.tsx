import React, { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { DocumentPlusIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

interface ModalFormProps {
  formComponent: React.ReactNode; // Definindo a propriedade formComponent
}

export default function Modal({ state, handleState, formComponent, resetForm  }: any) {
  const cancelButtonRef = useRef(null);
  const router = useRouter()

  // Função para fechar a modal e limpar o formulário
  const handleCloseModal = () => {
    resetForm(); // Limpar o formulário
    handleState(false); // Fechar a modal
  };

  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleState}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full xl:max-w-3xl">
                <div className="bg-white  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <DocumentPlusIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                     {/*  <Dialog.Title as="h3" className="dark:text-white text-base font-semibold leading-6 text-gray-900">
                        Registar Nova
                      </Dialog.Title> */}
                      <div className="mt-2">
                      {formComponent}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Renderizando o formulário dinâmico */}
                {/* <div className=" bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  
                  <button
                    type="button"
                    className="btn mt-3 inline-flex w-full  justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 sm:mt-0 sm:w-auto"
                    onClick={()=>handleState(false)}
                    ref={cancelButtonRef}
                  >
                    Voltar
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
