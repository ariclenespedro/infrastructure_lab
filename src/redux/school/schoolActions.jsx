import { createAsyncThunk } from "@reduxjs/toolkit";
/* import { getSession } from "next-auth/react"; */
import axios  from "axios";


export const createSchool = createAsyncThunk(
    'school/create',
    async (values, thunkAPI) => {
      try {
        const config = {
          baseURL: 'http://192.168.1.76:5100',
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const res = await axios.post(`/api/school/create`, values, config);
        console.log(res);
        return  res.data;
      } catch (error) {
        console.log('response schoolActions errors:',error);
        
        return thunkAPI.rejectWithValue(error);
      }
    }
  );