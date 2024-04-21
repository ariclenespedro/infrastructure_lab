import { createSlice } from "@reduxjs/toolkit";
import { createSchool, getSchoolsData  } from './schoolActions';


const initialState = {
    loading: true,
    school_data: null,
    error: null,
  };

const accountSlice = createSlice({
    name: "school",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Pending
      
      .addCase(createSchool.pending, (state) => {
        console.log('Pending case... create School');
        return{
          ...state,
          loading: true,
        }
      })

      .addCase(getSchoolsData.pending, (state) => {
        console.log('Pending case...');
        return{
          ...state,
          loading: true,
        }
      })

      //fulfilled
      
      .addCase(createSchool.fulfilled, (state, {payload}) =>{
        console.log('payload create School:',payload);
        return{
          ...state,
          loading:false,
          school_data: payload,
        }
      })

      .addCase(getSchoolsData.fulfilled, (state, {payload}) =>{
        console.log('payload:',payload);
        return{
          ...state,
          loading:false,
          school_data: payload,
        }
      })

      //reject
      .addCase(createSchool.rejected, ( state, {payload} ) => {
        console.log('Rejected create School:', payload);
        return{
          ...state,
          loading:false,
          error: payload,
        }
      })

      .addCase(getSchoolsData.rejected, ( state, {payload} ) => {
        console.log('Rejected:', payload);
        return{
          ...state,
          loading:false,
          error: payload,
        }
      })

      // Default
      .addDefaultCase((state) => {
        console.log('Default case...');
        return state

      })
  },
});

export default accountSlice.reducer;