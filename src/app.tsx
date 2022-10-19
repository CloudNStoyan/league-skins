import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./state/hooks";
import { fetchChampionFullData, fetchVersions } from "./state/ddragonSlice";
import { Route, Routes } from "react-router-dom";
import BrowseChampions from "./pages/BrowseChampions";
import ChampionInfo from "./pages/ChampionInfo";
import NotFound from "./pages/NotFound";

const App = () => {
  const dispatch = useAppDispatch();
  const { fetchVersionsStatus, versions, fetchChampionDataStatus } =
    useAppSelector((state) => state.ddragonReducer);

  useEffect(() => {
    if (fetchVersionsStatus !== "idle") {
      return;
    }

    dispatch(fetchVersions());
  }, [dispatch, fetchVersionsStatus]);

  useEffect(() => {
    if (
      !(fetchVersionsStatus === "succeeded" && versions.length > 0) ||
      fetchChampionDataStatus !== "idle"
    ) {
      return;
    }

    dispatch(fetchChampionFullData(versions[0]));
  }, [dispatch, versions, fetchVersionsStatus]);

  return (
    <Routes>
      <Route path="/league-skins/" element={<BrowseChampions />} />
      <Route
        path="/league-skins/champion/:championId"
        element={<ChampionInfo />}
      />
      <Route path="/league-skins/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
