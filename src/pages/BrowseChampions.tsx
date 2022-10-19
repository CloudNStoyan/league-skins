import React, { useEffect, useState } from "react";
import { ChampionData } from "../api/types";
import ChampionButton from "../ChampionButton";
import { useAppSelector } from "../state/hooks";
import BrowseChampionsStyled from "./styles/BrowseChampions.styled";

const BrowseChampions = () => {
  const { fetchChampionDataStatus, championsData, versions } = useAppSelector(
    (state) => state.ddragonReducer
  );

  const [filterInput, setFilterInput] = useState("");

  const [filteredChampionsData, setFilteredChampionsData] = useState<
    ChampionData[]
  >([]);

  useEffect(() => {
    if (filterInput.trim().length === 0) {
      setFilteredChampionsData(championsData);
      return;
    }

    setFilteredChampionsData(
      championsData.filter((champ) =>
        champ.name.toLowerCase().includes(filterInput.toLowerCase())
      )
    );
  }, [championsData, filterInput]);

  return (
    <BrowseChampionsStyled>
      <div className="champion-filter">
        <input
          value={filterInput}
          onChange={(e) => setFilterInput(e.target.value)}
          onBlur={(e) => setFilterInput(e.target.value)}
          placeholder="Aatrox.."
        />
      </div>
      <div className="champions-list">
        {fetchChampionDataStatus === "succeeded" && (
          <>
            {filteredChampionsData.map((champ) => (
              <ChampionButton
                data={champ}
                version={versions[0]}
                key={champ.id}
              />
            ))}
            {filteredChampionsData.length === 0 && (
              <h1>Sorry, no champions meet the filter</h1>
            )}
          </>
        )}
      </div>
    </BrowseChampionsStyled>
  );
};

export default BrowseChampions;
