import ResultCard from "@/components/ResultCard";
import data from "@/data/data.json";

export default function Home() {
  return (
    <main>
      <ResultCard items={data} />
    </main>
  );
}