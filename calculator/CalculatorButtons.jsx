import React from "react"
import styled from 'styled-components';

const CalculatorButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 40px 40px 40px;
    ${({columns}) => `grid-template-columns: repeat(${columns}, 64px)`}
`;

const CalculatorButton = styled.div`
    display: flex;
    height: 40px; 
    cursor: pointer;
    font-size: 16px;
    border-radius: 8px;
    border: grey solid 2px;
    align-items: center;
    margin: 10px;
    justify-content: center;

    &:hover {
        color: brown;
    }

    &:active {
        -webkit-box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.8);
    -moz-box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.8);
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.8);
    background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    background-image: -moz-linear-gradient(bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    background-image: -ms-linear-gradient(bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    background-image: linear-gradient(bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    }
`;


const Button = ({ 
    handleButtonClick, 
    value 
}) => (
    <CalculatorButton onClick={handleButtonClick}>
        {value}
    </CalculatorButton>
);

const CalculatorButtons = ({ 
    buttonsProps,
    columns
}) => buttonsProps.length ? (
    <CalculatorButtonContainer columns={columns}>
        {buttonsProps.map((props, index) => <Button {...props} key={index} />)}
    </CalculatorButtonContainer>
) : null;

export default CalculatorButtons;