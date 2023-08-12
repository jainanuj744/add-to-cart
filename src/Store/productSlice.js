import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Status = {
  Success: "success",
  Error: "error",
  Loading: "loading",
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: Status.Success  
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

//Thunk
export function fetchProducts() {
  return async function (dispatch) {
    dispatch(setStatus(Status.Loading));
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(res.data));
      dispatch(setStatus(Status.Success));
    } catch {
      dispatch(setStatus(Status.Error));
    }
  };
}
