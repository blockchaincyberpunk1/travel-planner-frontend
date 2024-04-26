import { createAsyncThunk } from "@reduxjs/toolkit";

// Async action for fetching plans from the backend
export const fetchPlans = createAsyncThunk(
  "plans/fetchPlans",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/plans");
      if (!response.ok) {
        throw new Error("Error fetching plans");
      }
      const plans = await response.json();
      return plans;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async action for adding a new plan
export const addPlan = createAsyncThunk(
  "plans/addPlan",
  async (planData, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/plans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(planData),
      });
      if (!response.ok) {
        throw new Error("Error adding plan");
      }
      const plan = await response.json();
      return plan;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async action for updating an existing plan
export const updatePlan = createAsyncThunk(
  "plans/updatePlan",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/plans/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error("Error updating plan");
      }
      const plan = await response.json();
      return plan;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async action for deleting a plan
export const deletePlan = createAsyncThunk(
  "plans/deletePlan",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/plans/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error deleting plan");
      }
      return id; // Return the id of the deleted plan
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
