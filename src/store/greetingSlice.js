import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGreeting = createAsyncThunk('greeting/get', async () => {
  try {
    const response = await axios.get('http://localhost:3000/');
    return response.data;
  } catch {
    return { text: 'Sorry, Please try again later' };
  }
});

const initialState = {
  loading: true,
  error: false,
  data: {},
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.pending, (state) => ({
        ...state,
        loading: true,
        data: { text: 'Hello There, Please wait while your greeting loads' },
      }))
      .addCase(getGreeting.fulfilled,
        (state, { payload }) => ({
          ...state,
          loading: false,
          data: payload,
        }))
      .addCase(getGreeting.rejected, (state) => ({ ...state, loading: false, error: true }));
  },
});

export default greetingSlice.reducer;
