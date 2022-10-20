import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChampionData } from "../api/types";
import { useAppSelector } from "../state/hooks";
import Chroma from "../icons/Chroma.png";
import ChampionInfoStyled from "./styles/ChampionInfo.styled";

const ChampionInfo = () => {
  const { championId } = useParams();
  const navigate = useNavigate();

  const { championsData, versions } = useAppSelector(
    (state) => state.ddragonReducer
  );

  const [championData, setChampionData] = useState<ChampionData>(null);
  const [skinNum, setSkinNum] = useState(0);

  useEffect(() => {
    const champData = championsData.find((champ) => champ.id === championId);

    if (!champData) {
      navigate("/");
    }

    setChampionData(champData);
  }, [championsData, championId]);

  return (
    <ChampionInfoStyled>
      {championData && (
        <>
          <div className="info">
            <div>
              <div title="Champion skins without the original">
                {championData.skins.length - 1} skins total
              </div>
              <div className="chrome-count">
                {championData.skins.filter((skin) => skin.chromas).length} skins
                with chromas
                <img src={Chroma} />
              </div>
            </div>
            <div>
              <div>
                {championData.name} {championData.title}
              </div>

              <div>Current patch: {versions[0]}</div>
            </div>
          </div>
          <div className="skins-list">
            {Object.values(championData.skins).map((skin) => (
              <button onClick={() => setSkinNum(skin.num)} key={skin.id}>
                <img
                  className="skin-img"
                  width="200"
                  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_${skin.num}.jpg`}
                />
                <span>{skin.name}</span>
                {skin.chromas && (
                  <img
                    className="highlight-chroma"
                    title="This skin has chromas"
                    src={Chroma}
                  />
                )}
              </button>
            ))}
          </div>
          <div className="full-skin">
            <h1>
              {championData.skins.find((skin) => skin.num === skinNum).name}
              {championData.skins.find((skin) => skin.num === skinNum)
                .chromas ? (
                <img title="This skin has chromas" src={Chroma} />
              ) : (
                <></>
              )}
            </h1>
            <div className="image-wrapper">
              <img
                className="skin-image"
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_${skinNum}.jpg`}
              />
            </div>
            <Link to={"/"} className="browse-link">
              Browse champions
            </Link>
          </div>
        </>
      )}
    </ChampionInfoStyled>
  );
};

export default ChampionInfo;
