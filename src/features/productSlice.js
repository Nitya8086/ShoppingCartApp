// src/features/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
 
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
