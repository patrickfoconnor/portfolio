import "./App.css";

function App() {
  return (
    <main className="container">
      <header>
        <h1>Patrick O'Connor</h1>
        <p>Full Stack Software Engineer</p>
        <a href="mailto:patrickoconnoricloud@gmail.com">
          patrickoconnoricloud@gmail.com
        </a>{" "}
        |
        <a href="https://github.com/patrickfoconnor" target="_blank">
          GitHub
        </a>{" "}
        |
        <a href="https://linkedin.com/in/patrick-f-oconnor" target="_blank">
          LinkedIn
        </a>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <p>
          Software engineer with 3+ years’ experience developing and stabilizing
          high-throughput Spring Boot microservices...
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        <h3>Software Engineer II – Blue Cross Blue Shield</h3>
        <ul>
          <li>
            Delivered 40+ Spring Boot microservices powering an enterprise
            claims system.
          </li>
          <li>Automated dev workflows, saving 1,000+ hours across 10 teams.</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>
            Java 17, Spring Boot, React, TypeScript, Docker, Azure, GitHub
            Actions
          </li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <p>B.S. in Computer Science – Montana State University, 2022</p>
      </section>
    </main>
  );
}

export default App;
