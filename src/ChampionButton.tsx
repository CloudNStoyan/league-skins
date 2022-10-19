import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { ChampionData } from "./api/types";

type ChampionButtonProps = {
  data: ChampionData;
  version: string;
};

const ChampionButton: FunctionComponent<ChampionButtonProps> = ({
  data,
  version,
}) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`/champion/${data.id}`)} title={data.name}>
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${data.id}.png`}
      />
    </button>
  );
};

export default ChampionButton;
