import React, { useState } from 'react';
import UseEffectProps from "./UseEffectProps";


export interface Question {
    questionId: number;
    answerValue: string;
}

const UseEffectPropsPage: React.FC = () => {
    const [value, setValue] = useState<number>(10);

    const question = {questionId: 200, answerValue: "테스트"};

    console.log('value > ' + value)
    console.log('question > ')
    console.log(question)

    return (
        <div>
            <UseEffectProps
                value={value}
                question={question}
            />
        </div>
    );
};

export default UseEffectPropsPage;
