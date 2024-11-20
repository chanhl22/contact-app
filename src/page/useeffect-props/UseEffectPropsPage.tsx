import React, { useEffect, useState } from 'react';
import UseEffectProps from "./UseEffectProps";

export interface Question {
    questionId: number;
    answerValue: string;
}

const UseEffectPropsPage: React.FC = () => {
    // 1, 7
    const [question, setQuestion] = useState<Question>();

    // 6
    useEffect(() => {
        setQuestion({ questionId: 200, answerValue: "테스트" })
    }, []);

    // 1, 7
    console.log('question > ', question);

    // 2, 8
    return (
        <div>
            <UseEffectProps
                question={question}
            />
        </div>
    );
};

export default UseEffectPropsPage;
