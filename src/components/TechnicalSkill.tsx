import type { TechnicalSkillItem } from "../types/TechnicalSkill";

interface TechnicalSkillsProps {
  data: TechnicalSkillItem;
}

export default function TechnicalSkills({ data }: TechnicalSkillsProps) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b border-gray-300 mb-2">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
        {Object.entries(data).map(([category, skills]) => (
          <div key={category}>
            <h3 className="font-medium text-gray-800 mb-1">{category}</h3>
            <ul className="list-disc list-inside">
              {skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
