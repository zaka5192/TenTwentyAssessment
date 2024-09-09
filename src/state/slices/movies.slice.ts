import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  movies: [],
};

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setMoviesData: (state, action) => {
      let data = action.payload.data;
      if (data !== undefined) {
        state.movies = data;
      }
    },
    clearMovies: (state, action) => {
      console.log('data is cleared');
      state.movies = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setMoviesData,
  clearMovies,
  // actionUpdateUser,
} = movieSlice.actions;

export default movieSlice.reducer;
