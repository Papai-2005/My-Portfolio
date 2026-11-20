
const skillCategories = [
  {
    title: "Backend Development",
    description: "Building APIs and server-side applications",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "BullMQ",
      "Microservices",
      "API Integration"
    ]
  },
  {
    title: "Databases & Caching",
    description: "Data modeling, storage and performance",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma ORM",
      "Mongoose",
      "Database Indexing",
      "ACID Transactions"
    ]
  },
  {
    title: "Programming Languages",
    description: "Languages used for development and problem solving",
    skills: [
      "JavaScript",
      "Python",
      "Java (Basics)",
      "SQL"
    ]
  },
  {
    title: "Frontend Development",
    description: "Building responsive web interfaces",
    skills: [
      "React.js",
      "Next.js",
      "Vite",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "DevOps & Tools",
    description: "Development, deployment and collaboration",
    skills: [
      "Docker",
      "AWS S3",
      "AWS EC2",
      "Git",
      "GitHub",
      "Postman",
      "CI/CD Pipelines"
    ]
  },
  {
    title: "Testing & AI Tools",
    description: "Quality assurance and developer productivity",
    skills: [
      "Jest",
      "API Testing",
      "LLM Integration",
      "Prompt Engineering",
      "GitHub Copilot",
      "ChatGPT"
    ]
  }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="section-heading">
        <p className="section-tag">MY TECH STACK</p>

        <h2>Technical Skills<span>.</span></h2>

        <p className="skills-intro">
          Technologies and tools I use to design,
          develop, test and deploy software applications.
        </p>
      </div>

      <div className="skills-grid">

        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>

            <div className="skill-card-heading">
              <h3>{category.title}</h3>
            </div>

            <p>{category.description}</p>

            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
