import styled from "styled-components";

const ChampionInfoStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;

  .info {
    margin-top: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .chrome-count {
      display: flex;

      img {
        height: 20px;
        margin-left: 5px;
      }
    }
  }

  .skins-list {
    margin-top: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 10px;

    button {
      position: relative;
      transition: transform 0.15s linear;

      .highlight-chroma {
        position: absolute;
        right: -5px;
        top: -5px;
      }

      .skin-img {
        margin: 0 auto;
        transition: box-shadow 0.15s linear;
      }

      &:hover {
        transform: scale(1.1);
        z-index: 100;

        .skin-img {
          box-shadow: 0 0 5px 2px #315b43;
        }
      }
    }

    span {
      text-transform: capitalize;
    }
  }

  .full-skin {
    max-width: 1215px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 50px;

    .image-wrapper {
      height: 600px;

      .skin-image {
        margin-top: 10px;
        max-height: 100%;
      }
    }

    h1 {
      text-transform: capitalize;
      font-size: 30px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      img {
        height: 20px;
        margin-left: 10px;
      }
    }
  }

  .browse-link {
    position: absolute;
    bottom: 0;
    right: -200px;
    color: #315b43;
    font-weight: 600;
    border-bottom: 1px solid #315b43;
    transition: transform 0.15s linear;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default ChampionInfoStyled;
