import React, { useEffect, useState } from 'react';
import UseEffectProps from "./UseEffectProps";


export interface Question {
    questionId: number;
    answerValue: string;
}

const UseEffectPropsPage: React.FC = () => {
    const [question, setQuestion] = useState<Question>();

    useEffect(() => {
        setQuestion({questionId: 200, answerValue: "테스트"})
    }, []);

    console.log('question > ')
    console.log(question)

    return (
        <div>
            <UseEffectProps
                question={question}
            />
        </div>
    );
};

export default UseEffectPropsPage;
