import React from 'react';


interface SchoolFormProps {
  onCancel: () => void; // Definindo a propriedade onCancel como uma função sem parâmetros e sem retorno
}

const SchoolForm: React.FC<SchoolFormProps> = ({ onCancel }) => {
  const handleCancelClick = () => {
    onCancel(); // Chama a função onCancel quando o botão "Cancelar" é clicado
  };
  
  return (
    <form>
      <div className="space-y-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Registrar Escola</h2>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-32 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Designação
              </label>
              <div className="mt-2">
              <input type="text" placeholder="Digite a designação" className="block input input-bordered input-md w-full " />
                
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
              <input type="email"  name="email"  id="email" autoComplete="email" placeholder="Digite um email válido" className="block input input-bordered input-md w-full " />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Localidade
              </label>
              <div className="mt-2">
                <input type="text" placeholder="Digite sua localidade" className="block input input-bordered input-md w-full " />
              </div>
            </div>

           
          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" onClick={handleCancelClick} className="text-sm font-semibold leading-6 text-gray-900">
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Salvar
        </button>
      </div>
    </form>
  )
}

export default SchoolForm;