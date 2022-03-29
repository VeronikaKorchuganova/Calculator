import { useState } from "react";
import { process } from "./CalculatorUtils";
import CalculatorValue from "./CalculatorValue";
import CalculatorButtons from './CalculatorButtons';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`;

const NUMS_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const OPERATIONS_ARRAY = ['+', '-', '*', '/'];

const CalculatorWrapper = () => {
    const [argument1, setArgument1] = useState(undefined);
    const [argument2, setArgument2] = useState(undefined);
    const [mathOperation, setMathOperation] = useState(undefined);

    /*************************************************************************************
     * button handlers
     *************************************************************************************/
    const calculatorValue = argument2 
        ?? argument1 
        ?? 0;

    /*************************************************************************************
     * button handlers
     *************************************************************************************/
    const calculate = () => {
        setArgument1(process(
            argument1, 
            argument2, 
            mathOperation
        ));
        
        setArgument2(undefined);
        setMathOperation(undefined);
    }

    const handleNumClick = (num) => {
        const curValue = mathOperation !== undefined 
            ? argument2 
            : argument1
        
        const argumentSetter = mathOperation !== undefined 
            ? setArgument2 
            : setArgument1

        argumentSetter(curValue !== undefined 
            ? +(curValue.toString() + num) 
            : num
        )
    }

    /*************************************************************************************
     * buttons config
     *************************************************************************************/
    const numButtons = NUMS_ARRAY.map(num => ({
        value: `${num}`, 
        handleButtonClick: handleNumClick.bind(null, num)
    }));

    const operationButtons = OPERATIONS_ARRAY.map(op => ({
        value: op,
        handleButtonClick: () => setMathOperation(op)
    }));

    const numButtonsProps = [
        ...numButtons,
    ];

    const operationButtonsProps = [
        ...operationButtons,
        { value: '=', handleButtonClick: calculate }
    ]

    return (
        <>
            <CalculatorValue value={calculatorValue} />
            <CalculatorContainer>
                <CalculatorButtons columns={3} buttonsProps={numButtonsProps}/>
                <CalculatorButtons columns={1} buttonsProps={operationButtonsProps}/>
            </CalculatorContainer>
        </>
    );
}

export default CalculatorWrapper;