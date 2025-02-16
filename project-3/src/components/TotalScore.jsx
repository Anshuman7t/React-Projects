import { styled } from "styled-components"

export const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

const ScoreContainer = styled.div`
    text-align: center;
    max-width: 180px;
    padding-left: 45px;
    
    h1 {
        font-size: 100px;
        line-height: 100px;
    }
    p {
        font-size: 24px;
        font-weight: 500px;
    }
`;