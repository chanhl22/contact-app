import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";

const GrammarPage: React.FC = () => {
    const [myString, setMyString] = useState<string>();
    const { input } = useParams()

    /**
     * split의 동작 방식
     */
    useEffect(() => {
        // setMyString(input || '');
        setMyString(input);
    }, []);

    console.log('input:');
    console.log(input);
    console.log('myString:');
    console.log(myString);

    let result1 = myString?.split('||') || [];
    console.log('result1:');
    console.log(result1);
    let result2 = myString ? myString.split('||') : [];
    console.log('result2:');
    console.log(result2);

    /**
     * every / some
     */
    const numbers = [2, 4, 6, 7];
    const allEven = numbers.every(num => num % 2 === 0);
    console.log(`every: ${allEven}`); // false, 모든 숫자가 짝수가 아니기 때문에 false

    const oneEven = numbers.some(num => num % 2 === 0);
    console.log(`some: ${oneEven}`); // true, 하나의 숫자라도 짝수이기 때문에 true

    return (
        <div>
            Grammar 관련 페이지
        </div>
    );
};

export default GrammarPage;
