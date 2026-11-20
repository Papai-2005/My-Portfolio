function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-heading">
        <p className="section-tag">GET TO KNOW ME</p>
        <h2>About Me<span>.</span></h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>
            I enjoy turning complex problems
            into practical backend solutions.
          </h3>

          <p>
            I'm Gourab Kundu, a Backend Developer
            focused on building reliable, scalable
            and efficient web applications.
          </p>

          <p>
            My primary stack includes Node.js,
            Express.js, PostgreSQL and Redis.
            I enjoy working with REST APIs,
            database design, authentication,
            transaction processing and backend
            architecture.
          </p>

          <p>
            Through projects like ChainLedger,
            I've gained practical experience in
            building, testing and deploying
            full-stack applications.
          </p>

          <p>
            I'm continuously learning and looking
            for opportunities to contribute to
            real-world software products.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-card">
            <span className="detail-label">LOCATION</span>
            <h4>Kolkata, India</h4>
          </div>

          <div className="detail-card">
            <span className="detail-label">SPECIALIZATION</span>
            <h4>Backend Development</h4>
          </div>

          <div className="detail-card">
            <span className="detail-label">PRIMARY STACK</span>
            <h4>Node.js · PostgreSQL · Redis</h4>
          </div>

          <div className="detail-card">
            <span className="detail-label">EDUCATION</span>
            <h4>B.Tech · Electrical Engineering</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
