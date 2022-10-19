import styled from "styled-components";

const BrowseChampionsStyled = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  .champion-filter {
    width: 600px;
    margin-bottom: 10px;
    border: 2px solid #315b43;
    background-color: white;
    padding: 5px;

    input {
      &:focus {
        outline: 0;
      }
    }
  }

  .champions-list {
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
    justify-content: center;

    img {
      width: 65px;
      height: 65px;
    }

    button {
      transition: scale linear 0.25s, border linear 0.25s;
      border: 2px solid transparent;

      &:hover {
        transform: scale(1.1);
        border: 2px solid #315b43;
      }
    }
  }
`;

export default BrowseChampionsStyled;
