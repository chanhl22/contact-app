import React, { useEffect, useState } from "react";
import { Question } from "./UseEffectPropsPage";

interface UseEffectPropsProps {
    question?: Question;
}

const UseEffectProps: React.FC<UseEffectPropsProps> = ({ question }) => {
    const [currentValue, setCurrentValue] = useState<string>(() => '변경한 value');

    console.log('자식 question > ')
    console.log(question)

    useEffect(() => {
        if (question) {
            question.answerValue = currentValue;
            console.log(question);
        }
    }, [question]);

    const handle = () => {
        console.log(question);
    }

    return question && (
        <div>
            <p>Question: {question.questionId}</p>
            <p>Question: {question.answerValue}</p>
            <button onClick={handle}>버튼</button>
        </div>
    );
};

export default UseEffectProps;
