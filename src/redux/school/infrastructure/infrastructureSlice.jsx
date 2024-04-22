import { createSlice } from "@reduxjs/toolkit";
import { createInfrastructure, getInfrastructureData  } from './infrastructureAction';


const initialState = {
    loading: true,
    Infrastructure_data: null,
    error: null,
  };

const infrastructureSlice = createSlice({
    name: "infrastructure",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Pending
      
      .addCase(createInfrastructure.pending, (state) => {
        console.log('Pending case... create Infrastructure');
        return{
          ...state,
          loading: true,
        }
      })

      .addCase(getInfrastructureData.pending, (state) => {
        console.log('Pending case... get Infrastructure');
        return{
          ...state,
          loading: true,
        }
      })

      //fulfilled
      
      .addCase(createInfrastructure.fulfilled, (state, {payload}) =>{
        console.log('payload create Infrastructure:',payload);
        return{
          ...state,
          loading:false,
          Infrastructure_data: payload,
        }
      })

      .addCase(getInfrastructureData.fulfilled, (state, {payload}) =>{
        console.log('payload get Infrastructure:',payload);
        return{
          ...state,
          loading:false,
          Infrastructure_data: payload,
        }
      })

      //reject
      .addCase(createInfrastructure.rejected, ( state, {payload} ) => {
        console.log('Rejected create Infrastructure:', payload);
        return{
          ...state,
          loading:false,
          error: payload,
        }
      })

      .addCase(getInfrastructureData.rejected, ( state, {payload} ) => {
        console.log('Rejected get Infrastructure:', payload);
        return{
          ...state,
          loading:false,
          error: payload,
        }
      })

      
      // Default
      .addDefaultCase((state) => {
        console.log('Default case Infrastructure...');
        return state

      })
  },
});

export default infrastructureSlice.reducer;