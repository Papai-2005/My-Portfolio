function Education() {
  return (
    <section className="education-section" id="education">

      <div className="section-heading">
        <p className="section-tag">MY BACKGROUND</p>

        <h2>Education & Journey<span>.</span></h2>

        <p className="education-intro">
          My academic background and continuous journey
          towards becoming a software developer.
        </p>
      </div>

      <div className="education-timeline">

        {/* SCHOOL EDUCATION - FIRST */}

        <div className="timeline-item">
          <div className="timeline-marker"></div>

          <div className="timeline-content">
            <div className="timeline-top">
              <span className="timeline-date">
                School Education
              </span>
            </div>

            <h3>School Education</h3>

            <h4>Uttarpara Amarendra Vidyaputh</h4>

            <p>
              Completed my school education, building
              the academic foundation that shaped my
              interest in engineering, technology
              and problem solving.
            </p>
          </div>
        </div>

        {/* B.TECH EDUCATION - SECOND */}

        <div className="timeline-item">
          <div className="timeline-marker"></div>

          <div className="timeline-content">
            <div className="timeline-top">
              <span className="timeline-date">
                2023 – 2027 (Expected)
              </span>

              <span className="timeline-status">
                Currently Pursuing
              </span>
            </div>

            <h3>
              Bachelor of Technology – Electrical Engineering
            </h3>

            <h4>
              Ghani Khan Choudhury Institute of Engineering
              & Technology
            </h4>

            <p>
              Building a strong engineering foundation
              while developing practical software
              engineering and backend development skills.
            </p>

            <div className="education-tags">
              <span>Data Structures & Algorithms</span>
              <span>Database Management Systems</span>
              <span>Programming for Problem Solving</span>
            </div>
          </div>
        </div>

      </div>

      {/* CAREER JOURNEY */}

      <div className="career-note">
        <div className="career-note-icon">↗</div>

        <div>
          <h3>Beyond Academics</h3>

          <p>
            Alongside my engineering studies, I build
            practical software projects, explore backend
            architecture, and continuously improve my
            development skills through hands-on learning.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Education;

