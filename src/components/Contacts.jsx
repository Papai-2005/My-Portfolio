function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11.02 11.02 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="section-heading">
        <p className="section-tag">GET IN TOUCH</p>

        <h2>
          Let's Build Something Together<span>.</span>
        </h2>

        <p className="contact-intro">
          I'm open to backend development opportunities,
          internships, freelance projects, and
          collaborations. Feel free to reach out!
        </p>
      </div>

      <div className="contact-container">

        <a
          href="mailto:kundug018@gmail.com"
          className="contact-card"
        >
          <div className="contact-icon">✉</div>

          <div>
            <h3>Email Me</h3>
            <p>kundug018@gmail.com</p>
          </div>

          <span>↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/gourab-kundu-7985ab289/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">in</div>

          <div>
            <h3>LinkedIn</h3>
            <p>Let's connect professionally</p>
          </div>

          <span>↗</span>
        </a>

        <a
          href="https://github.com/Papai-2005"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <div className="contact-icon github-icon">
            <GitHubIcon />
          </div>

          <div>
            <h3>GitHub</h3>
            <p>Explore my projects and code</p>
          </div>

          <span>↗</span>
        </a>

      </div>

      
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kundug018@gmail.com&su=Let's%20Connect%20-%20Portfolio%20Inquiry&body=Hi%20Gourab%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity%20or%20collaboration.%0A%0ABest%20regards%2C"
  target="_blank"
  rel="noreferrer"
  className="contact-button"
>
  Have a project in mind? Let's connect
  <span>↗</span>
</a>


    </section>
  );
}

export default Contact;

