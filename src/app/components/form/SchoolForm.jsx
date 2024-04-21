"use client";
import React from "react";

import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { createSchool } from "@/redux/school/schoolActions";

const initialValues = {
  designation: "",
  email: "",
  location: "",
};

const SchoolForm = ({ onCancel}) => {
  const handleCancelClick = () => {
    onCancel(); // Chama a função onCancel quando o botão "Cancelar" é clicado
  };

  const dispatch = useDispatch();

  const SchooltShema = Yup.object().shape({
    designation: Yup.string().required(
      "A designação da escola é um campo obrigatório"
    ),
    email: Yup.string().required("O email é obrigatório"),
    location: Yup.string().required("A localidade é obrigatória"),
  });

  const SchoolForm = useFormik({
    initialValues: initialValues,
    validationSchema: SchooltShema,
    onSubmit: async (values) => {
      console.log(values);
      const DataPayment = {
        designation: values.designation,
        email: values.email,
        location: values.location,
      };
      const result = await dispatch(createSchool(DataPayment));

      if (result.meta.requestStatus == "fulfilled") {

        onCancel(); // Fecha a modal após o registro bem-sucedido
        toast.success("Escola registrada com sucesso!");
        
      } else if (result.error.message === "Rejected") {
        console.log(result);
        toast.error(result.payload.message);
      }

      console.log(result.meta.requestStatus === "fulfilled");
      
    
      
    },
  });

  return (
    <form onSubmit={SchoolForm.handleSubmit}>
      <div className="space-y-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Registrar Escola
        </h2>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-32 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Designação
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  onChange={SchoolForm.handleChange}
                  value={SchoolForm.values.designation}
                  placeholder="Digite a designação"
                  className="block input input-bordered input-md w-full "
                />
                {SchoolForm.errors.designation &&
                  SchoolForm.touched.designation && (
                    <span className="text-red-600 text-sm">
                      {SchoolForm.errors.designation}
                    </span>
                  )}
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={SchoolForm.values.email}
                  onChange={SchoolForm.handleChange}
                  autoComplete="email"
                  placeholder="Digite um email válido"
                  className="block input input-bordered input-md w-full "
                />
                {SchoolForm.errors.email &&
                  SchoolForm.touched.email && (
                    <span className="text-red-600 text-sm">
                      {SchoolForm.errors.email}
                    </span>
                  )}
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Localidade
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="location"
                  name="location"
                  onChange={SchoolForm.handleChange}
                  value={SchoolForm.values.location}
                  placeholder="Digite sua localidade"
                  className="block input input-bordered input-md w-full "
                />
                {SchoolForm.errors.location &&
                  SchoolForm.touched.location && (
                    <span className="text-red-600 text-sm">
                      {SchoolForm.errors.location}
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

export default SchoolForm;
