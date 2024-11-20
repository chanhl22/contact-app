import React, { useEffect, useState } from "react";
import { Question } from "./UseEffectPropsPage";

interface UseEffectPropsProps {
    value?: number;
    question: Question;
}

const UseEffectProps: React.FC<UseEffectPropsProps> = ({ value, question }) => {
    const [currentValue, setCurrentValue] = useState<number>(() => 20);

    const otherQuestion = {questionId: 300, answerValue: '테스트테스트'};

    useEffect(() => {
        value = currentValue;
        console.log(value);
    }, []);

    console.log('자식 question > ')
    console.log(question)

    useEffect(() => {
        question = otherQuestion;
        question.answerValue = '이거는 변경이 가능하다고?';
        console.log(question);
    }, []);

    const handle = () => {
        console.log(question);
        console.log(value);
    }

    return (
        <div>
            <p>Value: {value}</p>
            <p>Question: {question.questionId}</p>
            <p>Question: {question.answerValue}</p>
            <button onClick={handle}>버튼</button>
        </div>
    );
};

export default UseEffectProps;
