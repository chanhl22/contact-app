import React, { useEffect } from 'react';

const LifeCyclePage: React.FC = () => {
    console.log("리액트 실행순서 - 1. 컴포넌트 최상단")

    useEffect(() => {
        console.log("리액트 실행순서 - 2. useEffect 실행")
    });

    const value = '리액트 실행순서 - 3. 리턴';
    const debugValue = (() => {
        console.log(value);
        return value;
      })();

    return (
        <div>
            라이프 사이클 관련 페이지
            <br/>
            {debugValue}
        </div>
    );
};

export default LifeCyclePage;
