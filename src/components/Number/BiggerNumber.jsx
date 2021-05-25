import React, { useState, useEffect } from "react";

export const BiggerNumber = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [biggerNum, setBiggerNum] = useState(0);

  const handleOnchangeFirstNum = (e) => {
    setFirstNum(e.target.value);
  };

  const handleOnChangeSecondNum = (e) => {
    setSecondNum(e.target.value);
  };

  const handleBiggerNumber = () => {
    setBiggerNum(
      parseInt(firstNum) < parseInt(secondNum) ? secondNum : firstNum
    );
  };

  useEffect(() => {
    setBiggerNum(
      parseInt(firstNum) < parseInt(secondNum) ? secondNum : firstNum
    );
  }, [firstNum, secondNum]);
  return (
    <div>
      <h3>Bigger Number Problem</h3>
      <p>
        First Number :
        <input type="number" onChange={handleOnchangeFirstNum}></input>
      </p>
      <p>
        Second Number :{" "}
        <input type="number" onChange={handleOnChangeSecondNum}></input>
      </p>
      <p>
        <button onClick={handleBiggerNumber}>Find Bigger Number</button>
      </p>
      <p>
        Result : Bigger Number is =<b> {biggerNum}</b>
      </p>
    </div>
  );
};
