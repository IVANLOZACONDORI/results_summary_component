import ScoreCircle from "./ScoreCircle";
import ContinueButton from "./ContinueButton";
import SummaryItem from "./SummaryItem";
import "./ResultCard.css";

type Item = {
  category: string;
  score: number;
  icon: string;
  colorClass: string;
};

type ResultCardProps = {
  items: Item[];
};

const ResultCard = ({ items }: ResultCardProps) => {
  return (
    <section className="result-card">
      <div className="result-panel">
        <h2 className="result-title">Your Result</h2>
        <ScoreCircle score={76} />
        <h3 className="result-subtitle">Great</h3>
        <p className="result-text">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div className="summary-panel">
        <h2 className="summary-title">Summary</h2>

        <div className="summary-list">
          {items.map((item) => (
            <SummaryItem
              key={item.category}
              category={item.category}
              score={item.score}
              icon={item.icon}
              colorClass={item.colorClass}
            />
          ))}
        </div>

        <ContinueButton />
      </div>
    </section>
  );
};

export default ResultCard;