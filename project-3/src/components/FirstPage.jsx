import { styled } from "styled-components";
import { Button } from "../styled/Button";

export const FirstPage = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src="./images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}


const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`
