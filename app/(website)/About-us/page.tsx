export default function About() {
  return (
    <>

      {/* About Section */}
      <section className="About" id="About-us">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Saint Gregory College</h2>
              <p>
                Founded in 2009, Saint Gregory College of Science and Technology
                has been at the forefront of scientific education.
              </p>
              <p>
                We pride ourselves on our state-of-the-art facilities,
                distinguished faculty, and strong industry partnerships.
              </p>

              <div className="stats">
                <div className="stat-item">
                  <div className="stat-number">5,000+</div>
                  <div className="stat-label">Students Graduated</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Faculty Members</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">17</div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
