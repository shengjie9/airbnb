import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGoodsPriceInfo } from "../../service";

const fetchGoodPriceInfo = createAsyncThunk("fetchGoodPriceInfo", async () => {
  const res = await getGoodsPriceInfo();
  return res.data;
});

const home = createSlice({
  name: "home",
  initialState: {
    goodsPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodsPriceInfo = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchGoodPriceInfo.fulfilled, (state, { payload }) => {
      state.goodsPriceInfo = payload;
    });
  },
});

export const { changeGoodPriceInfoAction } = home.actions;

export default home.reducer;

export { fetchGoodPriceInfo };
