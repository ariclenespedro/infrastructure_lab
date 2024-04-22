import { createAsyncThunk } from "@reduxjs/toolkit";
/* import { getSession } from "next-auth/react"; */
import axios  from "axios";


export const createInfrastructure = createAsyncThunk(
    'school/infrastructure/create',
    async (values, thunkAPI) => {

        const school_id = values?.school_id;
      try {
        const config = {
          baseURL: 'http://localhost:5100',
          headers: {
            'Content-Type': 'application/json',
          },
        };
        console.log(school_id);
        const res = await axios.post(`/api/schools/${school_id}/infrastructures/create`, values, config);
        console.log(res);
        return  res.data;
      } catch (error) {
        console.log('response InfrastructureActions errors:',error);
        
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const getInfrastructureData = createAsyncThunk(
    'schools/get',
    async (school_id) => {
      try {

        const config = {
          baseURL: 'http://localhost:5100',
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const res = await axios.get(`/api/schools/${school_id}/infrastructures`, config);
        console.log(res);
        return  res.data;
        
      } catch (error) {
        console.log('response infrastructureActions errors:',error);
        throw new Error(error.message);
      }
    },
  )