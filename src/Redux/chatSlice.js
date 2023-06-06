import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: {
    general: {
      id: "general",
      name: "General",
      messages: [],
    },
    // Add more rooms as needed
  },
  selectedRoom: "general",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const { roomId, message } = action.payload;
      state.rooms[roomId].messages.push(message);
    },
    createRoom: (state, action) => {
      const { id, name } = action.payload;
      state.rooms[id] = {
        id,
        name,
        messages: [],
      };
    },
    selectRoom: (state, action) => {
      state.selectedRoom = action.payload;
    },
  },
});

export const { addMessage, createRoom, selectRoom } = chatSlice.actions;

export default chatSlice.reducer;
