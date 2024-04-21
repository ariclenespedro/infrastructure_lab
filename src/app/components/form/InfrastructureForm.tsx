import React from 'react';


interface InfrastructureFormProps {
  onCancel: () => void;
}

const InfrastructureForm: React.FC<InfrastructureFormProps> = ({ onCancel }) => {
    const handleCancelClick = () => {
        onCancel(); // Chama a função onCancel quando o botão "Cancelar" é clicado
      }
  return (
    <form>
      <div className="space-y-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Registrar Infraestrutura</h2>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-32 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Escola
              </label>
              <div className="mt-2">
                <select className="select select-bordered w-full">
                    <option disabled selected>Selecione a Escola</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Designação
              </label>
              <div className="mt-2">
              <input type="text" placeholder="Digite a designação" className="block input input-bordered input-md w-full " />
                
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="funcional" className="block text-sm font-medium leading-6 text-gray-900">
                Funcional
              </label>
              <div className="mt-2">
              <input 
                    type="number"  
                    name="funcional"  
                    id="funcional" 
                    placeholder="Digite o número de salas ou laboratórios funcionais" 
                    className="block input input-bordered input-md w-full " 
                    min={`0`}
                    step={`1`}
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="funcional" className="block text-sm font-medium leading-6 text-gray-900">
               Não Funcional
              </label>
              <div className="mt-2">
              <input 
                    type="number"  
                    name="funcional"  
                    id="funcional" 
                    placeholder="Digite o número de salas ou laboratórios não funcionais" 
                    className="block input input-bordered input-md w-full "
                    min={`0`}
                    step={`1`} 
                />
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

export default InfrastructureForm;