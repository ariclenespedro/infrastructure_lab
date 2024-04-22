"use client";
import React from "react";

import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { createSchool } from "@/redux/school/schoolActions";

const initialValues = {
  designation: "",
  funcional: 0,
  nao_funcional: 0,
};

const InfrastructureForm = ({ onCancel, school_id }) => {
  const handleCancelClick = () => {
    onCancel(); // Chama a função onCancel quando o botão "Cancelar" é clicado
  };

  const dispatch = useDispatch();

  const InfrastructureShema = Yup.object().shape({
    designation: Yup.string().required(
      "A designação da escola é um campo obrigatório"
    ),
    funcional: Yup.number()
      .min(0, "O valor não pode ser negativo")
      .required("Campo obrigatório"),
      nao_funcional: Yup.number()
      .min(0, "O valor não pode ser negativo")
      .required("Campo obrigatório"),
  });
  const InfrastructureForm = useFormik({
    initialValues: initialValues,
    validationSchema: InfrastructureShema,
    onSubmit: async (values) => {
      console.log(values);
      const Data = {
        designation: values.designation,
        email: values.funcional,
        location: values.nao_funcional,
        total: parseInt(values.nao_funcional + values.funcional),
        school_id: school_id,
      };
      /* toast.success("parabens") */
      const result = await dispatch(createSchool(Data));

      if (result.meta.requestStatus == "fulfilled") {
        onCancel(); // Fecha a modal após o registro bem-sucedido
        toast.success("Escola registrada com sucesso!");
      } else if (result.error.message === "Rejected") {
        console.log(result);
        toast.error(result.payload.message);
      }
    },

  });

  return (
    <form onSubmit={InfrastructureForm.handleSubmit}>
      <div className="space-y-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Registrar Infraestrutura
        </h2>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-32 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Designação
                <span className="text-red-600 text-sm px-2">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  onChange={InfrastructureForm.handleChange}
                  value={InfrastructureForm.values.designation}
                  placeholder="Digite a designação"
                  className="block input input-bordered input-md w-full "
                />
                {InfrastructureForm.errors.designation &&
                  InfrastructureForm.touched.designation && (
                    <span className="text-red-600 text-sm">
                      {InfrastructureForm.errors.designation}
                    </span>
                  )}
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="funcional"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Funcional
                <span className="text-red-600 text-sm px-2">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="funcional"
                  id="funcional"
                  value={InfrastructureForm.values.funcional}
                  onChange={InfrastructureForm.handleChange}
                  placeholder="Digite o número de salas ou laboratórios funcionais"
                  className="block input input-bordered input-md w-full "
                  min={`0`}
                  step={`1`}
                />
                {InfrastructureForm.errors.funcional &&
                  InfrastructureForm.touched.funcional && (
                    <span className="text-red-600 text-sm">
                      {InfrastructureForm.errors.funcional}
                    </span>
                  )}
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="nao_funcional"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Não Funcional
                <span className="text-red-600 text-sm px-2">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="nao_funcional"
                  id="nao_funcional"
                  value={InfrastructureForm.values.nao_funcional}
                  onChange={InfrastructureForm.handleChange}
                  placeholder="Digite o número de salas ou laboratórios não funcionais"
                  className="block input input-bordered input-md w-full "
                  min={`0`}
                  step={`1`}
                />
                {InfrastructureForm.errors.nao_funcional &&
                  InfrastructureForm.touched.nao_funcional && (
                    <span className="text-red-600 text-sm">
                      {InfrastructureForm.errors.nao_funcional}
                    </span>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={handleCancelClick}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
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
  );
};

export default InfrastructureForm;
