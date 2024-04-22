import { createAsyncThunk } from "@reduxjs/toolkit";
/* import { getSession } from "next-auth/react"; */
import axios  from "axios";


export const createInfrastructure = createAsyncThunk(
    'school/infrastructure/create',
    async (values, thunkAPI) => {

        const school_id = values?.school_id;
      try {
        const config = {
          baseURL: 'http://192.168.1.76:5100',
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const res = await axios.post(`/api/schools/${school_id}/infrastructures/create`, values, config);
        console.log(res);
        return  res.data;
      } catch (error) {
        console.log('response InfrastructureActions errors:',error);
        
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  /* export const getSchoolsData = createAsyncThunk(
    'schools/get',
    async () => {
      try {

        const config = {
          baseURL: 'http://192.168.1.76:5100',
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const res = await axios.get(`/api/schools`, config);
        console.log(res);
        return  res.data;
        
      } catch (error) {
        console.log('response schoolActions errors:',error);
        throw new Error(error.message);
      }
    },
  ) */