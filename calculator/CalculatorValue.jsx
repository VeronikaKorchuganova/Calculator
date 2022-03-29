import styled from 'styled-components';

const CalculatorInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
    border: grey solid 2px;
    border-radius: 8px;
`;

/**
 * @param {object} props 
 * @param {string | number} props.value
 * @returns 
 */


const CalculatorValue = ({ value }) => <CalculatorInput>{value}</CalculatorInput>;

export default CalculatorValue;