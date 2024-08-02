import { styled } from "styled-components"
import { NumberSelector } from "./NumberSelector"
import { TotalScore } from "./TotalScore"
import { RoleDice } from "./RoleDice"
import { useState } from "react"
import { Button, OutLineButton } from "../styled/Button"
import { Rules } from "./Rules"

export const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
  const rollDice = () => {
    if (!selectNumber) {
      setError("You have not selected any number");
      return;
    };
    const randomNumber = generateRandomNumber(1,7)
    setCurrentDice((prev) => randomNumber)

    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectNumber(undefined);
};

  const resetScore = () => {
    setScore(0)
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selectNumber={selectNumber} setSelectNumber={setSelectNumber} />
      </div>
      <RoleDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutLineButton onClick={resetScore}>Reset</OutLineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  )
}

const MainContainer = styled.main`
  padding-top: 8px;
  width: 1350px;
  height: 151px;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;