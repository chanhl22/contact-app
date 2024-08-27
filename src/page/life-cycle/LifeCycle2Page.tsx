import React, {useEffect, useState} from 'react';

const LifeCycle2Page: React.FC = () => {
    console.log('리액트 실행순서 - 1. 컴포넌트 최상단');
    const [state, setState] = useState('처음 state');
    console.log(`state의 값은? : ${state}`)

    useEffect(() => {
        console.log('리액트 실행순서 - 3. useEffect 실행');
        setState('변경한 state');
        console.log(`변경된 state의 값은? : ${state}`);
    }, []);

    return (
        <div>
            라이프 사이클 관련 페이지
            {(() => {
                console.log('리액트 실행순서 - 2. 리턴');
                return null;
            })()}
        </div>
    );
};

export default LifeCycle2Page;
