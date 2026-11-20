
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <p className="hero-tag">
          BACKEND DEVELOPER
        </p>

        <h1>
          Building reliable
          <br />
          backend systems
          <br />
          <span>for the real world.</span>
        </h1>

        <p className="hero-description">
          Hi, I'm Gourab Kundu. I build scalable backend
          applications and REST APIs using Node.js,
          Express.js, PostgreSQL and Redis.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View Projects ↗
          </a>

          <a
  href="/Gourab-Kundu-CV.pdf"
  className="secondary-button"
  download="Gourab Kundu-CV.pdf"
>
  Download CV ↓
</a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/Papai-2005"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/gourab-kundu-7985ab289/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

      </div>

      <div className="hero-image">
  <img
    src="/public/My-image.jpeg"
    alt="Gourab Kundu - Backend Developer"
    className="profile-photo"
  />

  <p>Backend Developer · Kolkata, India</p>
</div>
</section>
  );
}

export default Hero;
