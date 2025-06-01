import type { SummaryItem } from "../types/Summary";

interface SummaryProps {
  data: SummaryItem[];
}

export default function Summary({ data }: SummaryProps) {
  return (
    <section className="mb-6">
      {data.map((item, index) => (
        <p key={index} className="text-gray-800 leading-relaxed mb-4">
          {item.summary}
        </p>
      ))}
    </section>
  );
}
