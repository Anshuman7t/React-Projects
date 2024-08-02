import { styled } from "styled-components"

export const NumberSelector = ({ selectNumber, setSelectNumber, error, setError }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandlor = (value) => {
      setSelectNumber(value)
      setError("")
    }
    
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
    <div className="flex">
        {arrNumber.map((value, index) => (<Box isSelected={value === selectNumber} key={index} onClick={() => numberSelectorHandlor(value)}>{value}</Box>))}
        
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 20px;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid; 
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
