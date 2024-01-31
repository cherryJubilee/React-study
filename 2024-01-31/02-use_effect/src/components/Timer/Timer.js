import React, { useEffect, useState } from "react";

function Timer() {
  const [passedTime, setPassedTime] = useState(0);

  useEffect(() => {
    // 1초마다 실행되는 setInterval
    const timerId = setInterval(() => {
      setPassedTime((prevPassedTime) => prevPassedTime + 1);
    }, 1000);

    // 컴포넌트가 언마운트 되거나 업데이트되기 전에 실행될 정리(clean-up) 함수
    return () => {
      clearInterval(timerId);
    };
  }, []); // 빈 의존성 배열(dependency array) -> 이 효과는 마운트 될 때 한 번만 실행됨

  return (
    <div>
      <h1>타이머</h1>
      <div style={{ display: "flex", flexWrap: "wrap", columnGap: 4 }}>
        {Array(passedTime)
          .fill(0)
          .map((_, index) => (
            <div key={index}>{index}</div>
          ))}
      </div>
    </div>
  );
}

export default Timer;
