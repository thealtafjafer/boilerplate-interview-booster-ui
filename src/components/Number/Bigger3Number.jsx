import React, { useState, useEffect } from "react";

export const Bigger3Number = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [thirdNum, setThirdNum] = useState(0);
  const [biggerNum, setBiggerNum] = useState(0);

  const handleOnchangeFirstNum = (e) => {
    setFirstNum(e.target.value);
  };

  const handleOnChangeSecondNum = (e) => {
    setSecondNum(e.target.value);
  };
  const handleOnChangeThirdNum = (e) => {
    setThirdNum(e.target.value);
  };

  useEffect(() => {
    const firstBig =
      parseInt(firstNum) < parseInt(secondNum) ? secondNum : firstNum;
    const finalbig =
      parseInt(firstBig) < parseInt(thirdNum) ? thirdNum : firstBig;
    setBiggerNum(finalbig);
  }, [firstNum, secondNum, thirdNum]);

  useEffect(() => {
    setFirstNum(5);
    setSecondNum(7);
    setThirdNum(3);
    console.log("Shoaib has called me.....");
  }, []);
  return (
    <div>
      <h3>Bigger 3 Number Problem</h3>
      <p>
        First Number :
        <input
          type="number"
          onChange={handleOnchangeFirstNum}
          value={firstNum}
        ></input>
      </p>
      <p>
        Second Number :{" "}
        <input
          type="number"
          onChange={handleOnChangeSecondNum}
          value={secondNum}
        ></input>
      </p>
      <p>
        Third Number :{" "}
        <input
          type="number"
          onChange={handleOnChangeThirdNum}
          value={thirdNum}
        ></input>
      </p>
      <p>
        Result : Bigger Number is =<b> {biggerNum}</b>
      </p>
    </div>
  );
};
