import Image from "next/image";
import "./SummaryItem.css";

type SummaryItemProps = {
  category: string;
  score: number;
  icon: string;
  colorClass: string;
};

const SummaryItem = ({
  category,
  score,
  icon,
  colorClass,
}: SummaryItemProps) => {
  return (
    <div className={`summary-item ${colorClass}`}>
      <div className="summary-left">
        <Image src={icon} alt={category} width={20} height={20} />
        <span className="summary-category">{category}</span>
      </div>

      <div className="summary-right">
        <span className="score-strong">{score}</span>
        <span className="score-light"> / 100</span>
      </div>
    </div>
  );
};

export default SummaryItem;