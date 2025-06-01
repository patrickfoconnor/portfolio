import type { LeadershipMentorshipItem } from "../types/LeadershipMentorship";

interface LeadershipMentorshipProps {
  data: LeadershipMentorshipItem[];
}

export default function LeadershipMentorship({
  data,
}: LeadershipMentorshipProps) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b border-gray-300 mb-2">
        Leadership & Mentorship
      </h2>
      {data.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-medium text-gray-800">{item.title}</h3>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {item.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
