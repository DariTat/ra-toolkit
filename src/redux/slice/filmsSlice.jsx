import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    films: [],
    loading: false,
    error: "", 
    favorites: [],
    film: []
}

export const fetchFilms = createAsyncThunk(
    "films/fetchFilms",
    async (url, {rejectWithValue}) => {
        
        try {
        const response = await fetch(
          `https://www.omdbapi.com?apikey=64405bd2&s=${url}&plot=full`
        );
  
        if (!response.ok) {
          return rejectWithValue("Loading error!");
        }
  
        return await response.json();
      } catch (e) {
        return rejectWithValue(e);
      }
    }
);

export const fetchFilm = createAsyncThunk(
  "films/fetchFilm",
  async (url, {rejectWithValue}) => {
      
      try {
      const response = await fetch(
        `https://www.omdbapi.com?apikey=64405bd2&i=${url}`
      );

      if (!response.ok) {
        return rejectWithValue("Loading error!");
      }

      return await response.json();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
      addFavorites: (state, action) => {
        state.favorites.push(action.payload);
      },
      removeFavorites: (state, action) => {
        state.favorites = state.favorites.filter((film) => film.imdbID !== action.payload);
      },
      main: (state) => {
        state.films = [];
      }
     },
    extraReducers: (builder) => {
      builder
        .addCase(fetchFilms.pending, (state) => {
          state.loading = true;
          state.error = "";
        })
        .addCase(fetchFilms.fulfilled, (state, action) => {
          state.films = action.payload;
          state.loading = false;
          state.error = "";
        })
        .addCase(fetchFilms.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(fetchFilm.fulfilled, (state, action) => {
          state.film = action.payload;
          state.loading = false;
          state.error = "";
        });
    }
  });
  
  export const { addFavorites, removeFavorites, main } = filmsSlice.actions;
  export default filmsSlice.reducer;