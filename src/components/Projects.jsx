
const projects = [
  {
    title: "ChainLedger",
    category: "FULL-STACK FINANCIAL APPLICATION",
    description:
      "A financial transaction management platform featuring wallet management, secure transactions, financial analytics and audit tracking.",
    image: "/public/Project-Chainledger.png",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ"
    ],
    github:
      "https://github.com/Papai-2005/Project-ChainLedger",
    demo: "https://project-chainledger-1.onrender.com/",
    highlight: "29/29 automated tests passing"
  },
  {
    title: "Ledger & Transaction Management API",
    category: "BACKEND REST API",
    description:
      "A backend financial ledger system supporting account management, balance tracking, fund transfers and immutable transaction records.",
    image: "/public/backend-ledger-2.webp",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Docker",
      "JWT"
    ],
    github:
      "https://github.com/Papai-2005/Backend-Ledger-Project",
    demo: "https://backend-ledger-project.onrender.com",
    highlight: "Idempotent transaction handling"
  },
  {
    title: "LinkForge",
    category: "URL SHORTENER",
    description:
      "A URL shortening application that converts long URLs into compact links using Base62 encoding and Redis-based storage.",
    image: "/public/LinkForge-Project.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Redis"
    ],
    github:
      "https://github.com/Papai-2005/LinkForge-Long-URLs-forged-intoshort-links",
    demo: null,
    highlight: "Base62 URL encoding"
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="section-heading">
        <p className="section-tag">MY WORK</p>
        <h2>Featured Projects<span>.</span></h2>
        <p className="projects-intro">
          A selection of applications and backend systems
          I've designed, developed and deployed.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>

            <div className="project-image">
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                loading="lazy"
              />
            </div>

            <div className="project-info">

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <p className="project-highlight">
                {project.highlight}
              </p>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}

              </div>

            </div>
          </article>
        ))}

      </div>
    </section>
  );
}

export default Projects;
