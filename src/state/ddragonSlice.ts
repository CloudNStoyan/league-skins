import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { riotFetchChampionFullData, riotFetchVersions } from "../api/ddragon";
import { ChampionData, ChampionFullData } from "../api/types";

export interface DDragonState {
  fetchVersionsStatus: "loading" | "succeeded" | "failed" | "idle";
  versions: string[];
  fetchChampionDataStatus: "loading" | "succeeded" | "failed" | "idle";
  championsData: ChampionData[];
}

const initialState: DDragonState = {
  fetchVersionsStatus: "idle",
  versions: [],
  fetchChampionDataStatus: "idle",
  championsData: [],
};

export const fetchVersions = createAsyncThunk(
  "ddragon/fetchVersions",
  async () => {
    const response = await riotFetchVersions();
    return response;
  }
);

export const fetchChampionFullData = createAsyncThunk(
  "ddragon/fetchChampionFullData",
  async (version: string) => {
    const response = await riotFetchChampionFullData(version);
    return response;
  }
);

const ddragonSlice = createSlice({
  name: "ddragon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVersions.pending, (state) => {
        state.fetchVersionsStatus = "loading";
      })
      .addCase(
        fetchVersions.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.versions = action.payload;
          state.fetchVersionsStatus = "succeeded";
        }
      )
      .addCase(fetchVersions.rejected, (state) => {
        state.fetchVersionsStatus = "failed";
      });

    builder
      .addCase(fetchChampionFullData.pending, (state) => {
        state.fetchChampionDataStatus = "loading";
      })
      .addCase(fetchChampionFullData.fulfilled, (state, action) => {
        state.championsData = action.payload;
        state.fetchChampionDataStatus = "succeeded";
      })
      .addCase(fetchChampionFullData.rejected, (state) => {
        state.fetchChampionDataStatus = "failed";
      });
  },
});

export const {} = ddragonSlice.actions;
export default ddragonSlice.reducer;
