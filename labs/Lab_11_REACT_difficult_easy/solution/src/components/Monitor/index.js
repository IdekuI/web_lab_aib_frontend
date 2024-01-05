import React from "react";
import styled from "styled-components";

const DivWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    color: #dddcdd;
    background-color:#393939;
    padding: 16px;
`;

const TextWrapper = styled('span')`
    font-size: 32px;
`;

const MonthWrapper = styled(TextWrapper)`
    font-weight: bold;
    margin-right: 8px;
`;

const ButtonWrapper = styled('button')`
    border: unset;
    background-color: #5D5D5D;
    height: 20px;
    margin-right: 2px;
    border-radius: 4px;
    color: #dddcdd;
    outline: unset;
    cursor: pointer;
`;

const ToDayButton = styled(ButtonWrapper)`
    padding-left: 16px;
    padding-right: 16px;
    font-weight: bold;
`;

const Monitor = ({today, prevHandler, todayHandler, nextHandler}) => (
    <DivWrapper>
        <div>
            <MonthWrapper>{today.format('MMMM')}</MonthWrapper>
            <TextWrapper>{today.format('YYYY')}</TextWrapper>
        </div>
        <div>
            <ButtonWrapper onClick={prevHandler}> &lt; </ButtonWrapper>
            <ToDayButton onClick={todayHandler}> today </ToDayButton>
            <ButtonWrapper onClick={nextHandler}> &gt; </ButtonWrapper>
        </div>
    </DivWrapper>
);

export { Monitor };