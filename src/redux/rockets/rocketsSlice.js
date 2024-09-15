import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataFromServer = createAsyncThunk('rocket/getDataFromServer', async () => {
  const baseUrl = 'https://api.spacexdata.com/v4/rockets';
  try {
    const response = await axios.get(baseUrl);
    const data = response.data;
    return data;
  } catch (error) {
    return error.message;
  }
})

const initialState = {
  rocketData : [],
  loading: false,
  error: '',
}

const RocketSlice  = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocket = state.rocketData.find((rocket) => rocket.id === action.payload)
      rocket.reserved = !rocket.reserved
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromServer.pending, (state) => {
        state.loading = true;
      })
    .addCase(getDataFromServer.fulfilled, (state, action) => {
      state.loading = false;
      state.rocketData = action.payload.map((rocket) => ({
        id: rocket.id,
        name:rocket.name,
        type: rocket.type,
        images: rocket.flickr_images[0],
        description: rocket.description,
        reserved: false
      }));
    })

    .addCase(getDataFromServer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
}

})
    

export default RocketSlice.reducer;
export const { reserveRocket } = RocketSlice.actions;