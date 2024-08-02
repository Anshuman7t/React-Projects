import { styled } from "styled-components"

export const RoleDice = ({currentDice, rollDice}) => {
    
  return (
    <DiceContainer>
        <div className="dice" onClick={rollDice}>
        <img src={`./images/dice/dice_${currentDice}.png`} />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    .dice {
        cursor: pointer;
    }

    p {
        font-size: 24px;
    }
`;