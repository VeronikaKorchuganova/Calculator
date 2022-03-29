import CalculatorWrapper from "./CalculatorWrapper";
import styled from 'styled-components';

const CalculatorBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const CalculatorContainer = styled.div`
    max-width: 400px;
    border: 2px solid grey;
    border-radius: 15px;
    padding: 12px;
`;

//tut bubut stili containera

const Calculator = () => (
    <CalculatorBody>
        <CalculatorContainer>
            <CalculatorWrapper />
        </CalculatorContainer>
    </CalculatorBody>
);

export default Calculator;