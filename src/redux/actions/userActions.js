import { createAsyncThunk } from "@reduxjs/toolkit";

// Async action for user login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error("Failed to log in.");
      }
      const user = await response.json();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async action for user registration
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error("Failed to register.");
      }
      const user = await response.json();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async action for user logout
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      // Assuming your app requires an API call for logout
      const response = await fetch("/api/users/logout");
      if (!response.ok) {
        throw new Error("Failed to log out.");
      }
      return null; // You might want to adjust this based on your API's response
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
