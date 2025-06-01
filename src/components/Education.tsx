import type { EducationItem } from "../types/Education";

interface EducationProps {
  data: EducationItem[];
}

export default function Education({ data }: EducationProps) {
  return (
    <section>
      <h2 className="text-xl font-bold border-b pb-1 mb-4">Education</h2>
      {data.map((item, i) => (
        <div key={i} className="mb-6">
          <div className="flex justify-between text-sm font-semibold">
            <span>{item.degree}</span>
            <span>{item.date}</span>
          </div>
          <div className="text-sm text-gray-600">
            {item.school} – {item.honors}
          </div>
        </div>
      ))}
    </section>
  );
}
