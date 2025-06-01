import "./App.css";
import AcademicLeadership from "./components/AcademicLeadership";
import Education from "./components/Education";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import LeadershipMentorship from "./components/LeadershipMentorship";
import TechnicalSkills from "./components/TechnicalSkill";

import academicLeadershipData from "./data/academic_leadership.json";
import educationData from "./data/education.json";
import headerData from "./data/header.json";
import summaryData from "./data/summary.json";
import experienceData from "./data/experience.json";
import leadershipData from "./data/leadership.json";
import technicalSkillsData from "./data/technical_skills.json";

export default function App() {
  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-900 font-sans">
      <Header data={headerData} />
      <Summary data={summaryData} />
      <Experience data={experienceData} />
      <LeadershipMentorship data={leadershipData} />
      <TechnicalSkills data={technicalSkillsData} />
      <Education data={educationData} />
      <AcademicLeadership data={academicLeadershipData} />
    </main>
  );
}
