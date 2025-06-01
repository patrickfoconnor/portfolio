// components/Experience.tsx
import type { ExperienceItem } from "../types/Experience";

interface ExperienceProps {
  data: ExperienceItem[];
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section>
      <h2 className="text-xl font-bold border-b pb-1 mb-4">
        Career Experience
      </h2>
      {data.map((item, i) => (
        <div key={i} className="mb-6">
          <div className="flex justify-between text-sm font-semibold">
            <span>{item.company}</span>
            <span>{item.date}</span>
          </div>
          <div className="text-sm text-gray-600">
            {item.title} – {item.location}
          </div>
          <ul className="list-disc ml-5 mt-1 text-sm">
            {item.bullets.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
