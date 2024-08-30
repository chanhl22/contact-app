import React, {useEffect} from 'react';

const LifeCyclePage: React.FC = () => {
    console.log("리액트 실행순서 - 1. 컴포넌트 최상단")

    useEffect(() => {
        console.log("리액트 실행순서 - 3. useEffect 실행")
    });

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

export default LifeCyclePage;
