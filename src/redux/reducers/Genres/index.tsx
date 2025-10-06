
import {createSlice} from '@reduxjs/toolkit';

export interface GenresState {
  genres: string[];
}

const initialState: GenresState = {
  genres: [],
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    editgenresUp: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const {editgenresUp} = genresSlice.actions;

export default genresSlice.reducer;