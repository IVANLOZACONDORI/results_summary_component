import "./ScoreCircle.css";

type ScoreCircleProps = {
  score: number;
};

const ScoreCircle = ({ score }: ScoreCircleProps) => {
  return (
    <div className="score-circle">
      <span className="score-number">{score}</span>
      <span className="score-total">of 100</span>
    </div>
  );
};

export default ScoreCircle;