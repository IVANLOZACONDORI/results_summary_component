import {
  Zap,
  Brain,
  MessageCircle,
  Eye,
} from "lucide-react";
import "./SummaryItem.css";

type SummaryItemProps = {
  category: string;
  score: number;
};

const SummaryItem = ({ category, score }: SummaryItemProps) => {
  const getIcon = () => {
    switch (category) {
      case "Reaction":
        return <Zap size={20} />;
      case "Memory":
        return <Brain size={20} />;
      case "Verbal":
        return <MessageCircle size={20} />;
      case "Visual":
        return <Eye size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className={`summary-item ${category.toLowerCase()}`}>
      <div className="summary-left">
        {getIcon()}
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