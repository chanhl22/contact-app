import React, { useEffect, useState } from "react";
import { Question } from "./UseEffectPropsPage";

interface UseEffectPropsProps {
    question?: Question;
}

const UseEffectProps = ({ question }: UseEffectPropsProps) => {
    // 3, 9
    const [currentValue, setCurrentValue] = useState<string>(() => '변경한 value');
    // 3, 9
    console.log('자식 question > ', question);

    // 5, 11
    useEffect(() => {
        console.log('UseEffectProps > useEffect 실행')
        if (question) {
            question.answerValue = currentValue;
            console.log('변경 question > ', question);
        }
    // }, [question]);
    }, []);

    /**
     * 의존성 배열에 question이 있으면 6번 순서에서 useState가 바뀌면서 재랜더링 될 때 변경을 감지해서 useEffect가 실행됨
     *
     * 의존성 배열에 아무것도 없으면 6번 순서에서 useState가 바뀌어도 재랜더링 될 때 변경을 감지하지 않아서 useEffect가 실행안됨
     */

    const handle = () => {
        console.log(question);
    }

    // 4, 10
    return question ? (
        <div>
            <p>Question: {question.questionId}</p>
            <p>Question: {question.answerValue}</p>
            <button onClick={handle}>버튼</button>
        </div>
    ) : null;
};

export default UseEffectProps;
