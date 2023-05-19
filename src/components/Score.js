import { useContext } from "react";
import { Datacontext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Score = () => {
  const { score, setAppState, setScore } = useContext(Datacontext);

  const restartApp = () => {
    setScore(0);
    setAppState("menu");
  };

  return (
    <div className="score">
      <h1>สรุปผลคะแนน</h1>
      <h2>
        {score} / {QuestionsData.length}
      </h2>
      <button
        onClick={() => {
          restartApp();
        }}
      >
        กลับไปทำข้อสอบใหม่
      </button>
    </div>
  );
};

export default Score;
