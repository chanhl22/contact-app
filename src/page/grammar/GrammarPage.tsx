import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";

const GrammarPage: React.FC = () => {
    const [myString, setMyString] = useState<string>();
    const { input } = useParams()

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

    return (
        <div>
            Grammar 관련 페이지
        </div>
    );
};

export default GrammarPage;
