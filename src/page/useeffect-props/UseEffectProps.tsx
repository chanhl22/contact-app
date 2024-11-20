import React, { useEffect, useState } from "react";
import { Question } from "./UseEffectPropsPage";

interface UseEffectPropsProps {
    value?: number;
    question: Question;
}

const UseEffectProps: React.FC<UseEffectPropsProps> = ({ value, question }) => {
    const [currentValue, setCurrentValue] = useState<number>(() => 20);

    const otherQuestion = {questionId: 300, answerValue: "테스트테스트"};

    useEffect(() => {
        value = currentValue;
        console.log(value);
    }, [value, currentValue]);

    useEffect(() => {
        question = otherQuestion;
        console.log(question);
    }, [question]);

    return (
        <div>
            <p>Value: {value}</p>
            <p>Question: {question.questionId}</p>
            <p>Question: {question.answerValue}</p>
        </div>
    );
};

export default UseEffectProps;
