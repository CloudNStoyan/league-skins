import { ChampionFullData } from "./types";

export const riotFetchVersions = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );

  const json = await response.json();

  return json;
};

export const riotFetchChampionFullData = async (version: string) => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/championFull.json`
  );

  const championData: ChampionFullData = await response.json();

  return Object.values(championData.data);
};
