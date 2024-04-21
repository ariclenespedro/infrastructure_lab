import { createAsyncThunk } from "@reduxjs/toolkit";
/* import { getSession } from "next-auth/react"; */
import axios  from "axios";


export const createSchool = createAsyncThunk(
    'payments/create',
    async (values, thunkAPI) => {
      try {
        const session = await getSession();
        const token = session?.token;
        const client_id = session?.client._id;
  
        const config = {
          baseURL: process.env.APPLICATION_URL,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
  

        const res = await axios.post(`/api/${client_id}/payments/references`, values, config);
        return res.data;
      } catch (error) {
        console.log('response paymentActions errors:',error);
        
        return thunkAPI.rejectWithValue(error);
      }
    }
  );