import { createSlice } from "@reduxjs/toolkit";
import { getCurrentTimestamp } from "../../utils/getCurrentTimestamp";

// I decided to keep here timestamp instead of just a string (hh:mm:ss) because it's more flexible.
// If the application grows, it will allow a programmer to do more.
interface ClockState {
  timestamp: number;
}

const initialState: ClockState = {
  timestamp: getCurrentTimestamp(),
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    updateCurrentTime: (state) => {
      state.timestamp = getCurrentTimestamp();
    },
  },
});

export const { updateCurrentTime } = clockSlice.actions;

export default clockSlice.reducer;
