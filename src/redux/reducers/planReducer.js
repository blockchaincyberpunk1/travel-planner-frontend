import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPlans,
  addPlan,
  updatePlan,
  deletePlan,
} from "../actions/planActions";

const initialState = {
  plans: [],
  loading: false,
  error: null,
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    // Add synchronous reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = action.payload;
        state.error = null;
      })
      .addCase(fetchPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addPlan.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPlan.fulfilled, (state, action) => {
        state.loading = false;
        state.plans.push(action.payload);
      })
      .addCase(addPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updatePlan.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePlan.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.plans.findIndex(
          (plan) => plan._id === action.payload._id
        );
        if (index !== -1) {
          state.plans[index] = action.payload;
        }
      })
      .addCase(updatePlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deletePlan.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePlan.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = state.plans.filter((plan) => plan._id !== action.payload);
      })
      .addCase(deletePlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default planSlice.reducer;
