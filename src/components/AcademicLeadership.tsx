import type { AcademicLeadershipItem } from "../types/AcademicLeadership";

interface AcademicLeadershipProps {
  data: AcademicLeadershipItem[];
}

export default function AcademicLeadership({ data }: AcademicLeadershipProps) {
  return (
    <section>
      <h2 className="text-xl font-bold border-b pb-1 mb-4">
        Academic Leadership
      </h2>
      {data.map((item, i) => (
        <div key={i} className="mb-6">
          <div className="flex justify-between text-sm font-semibold">
            <span>{item.title}</span>
            <span>{item.date}</span>
          </div>
          <div className="text-sm text-gray-600">{item.location}</div>
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
