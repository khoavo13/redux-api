import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cats: [],
  currentPage: 1,
  status: "start",
  error: null,
};

const url = "https://66a6fb0423b29e17a1a3dfd3.mockapi.io/product";

export const fetchCats = createAsyncThunk("cats/fetchCats", async () => {
  const response = await axios.get(url);
  return response.data;
});

export const deleteCat = createAsyncThunk("cats/deleteCat", async (id) => {
  await axios.delete(url + "/" + id);
  return id;
});

export const recheckedCat = createAsyncThunk(
  "cats/recheckedCat",
  async (cat) => {
    const response = await axios.put(url + "/" + cat.id, {
      ...cat,
      checked: !cat.checked,
    });
    return response.data;
  }
);

export const addNewCat = createAsyncThunk(
    "cats/addNewCat",
    async (cat) => {
      const response = await axios.post(url, cat);
      return response.data;
    }
  );

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.status = "successed"
        state.cats = action.payload
      })
      .addCase(fetchCats.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(deleteCat.fulfilled, (state, action) => {
        state.cats = state.cats.filter((item) => item.id !== action.payload)
      })
      .addCase(recheckedCat.fulfilled, (state, action) => {
        state.cats = state.cats.map((item) =>
          item.id === action.payload.id ? action.payload : item
        )
      })
      .addCase(addNewCat.fulfilled, (state, action) => {
        state.cats.push(action.payload)
      })
  },
});

export default catSlice.reducer;
