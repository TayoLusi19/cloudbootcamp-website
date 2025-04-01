const About = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -100px 0px' }
    );
    
    document.querySelectorAll('.animate').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="page-banner">
        <div className="container">
          <h1>About Us</h1>
          <p>Developing extraordinary talent for extraordinary achievement</p>
        </div>
      </section>
      
      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text animate">
              <h2>Our Mission</h2>
              <p>The 1% University was founded on the principle that extraordinary success requires extraordinary education. We provide elite training programs designed to develop the mindset, skills, and network that separate the exceptional from the ordinary.</p>
              <p>Our curriculum combines cutting-edge industry knowledge, personalized mentorship, and practical experience to create transformative learning experiences that propel our students into the top 1% of their fields.</p>
            </div>
            <div className="mission-video animate">
              <div className="video-placeholder">
                <img src="https://source.unsplash.com/random/600x400/?university,education" alt="Mission Video" />
                <div className="play-button">
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-values">
        <div className="container">
          <h2 className="section-title animate">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card animate">
              <div className="value-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Excellence</h3>
              <p>We pursue excellence in everything we do, from curriculum development to student experience.</p>
            </div>
            <div className="value-card animate">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We constantly evolve our teaching methods and content to reflect cutting-edge developments.</p>
            </div>
            <div className="value-card animate">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Community</h3>
              <p>We foster a supportive community of high-achievers who inspire and uplift each other.</p>
            </div>
            <div className="value-card animate">
              <div className="value-icon">
                <i className="fas fa-arrows-up-to-line"></i>
              </div>
              <h3>Growth</h3>
              <p>We believe in continuous growth and development, both for our students and our institution.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-team">
        <div className="container">
          <h2 className="section-title animate">Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member animate">
              <div className="member-image">
                <img src="https://source.unsplash.com/random/300x300/?executive,man" alt="John Morgan" />
              </div>
              <h3>John Morgan</h3>
              <p className="member-role">Founder & CEO</p>
              <p className="member-bio">Former Fortune 500 executive with 20+ years of experience in business transformation.</p>
              <div className="member-social">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="team-member animate">
              <div className="member-image">
                <img src="https://source.unsplash.com/random/300x300/?executive,woman" alt="Dr. Alexandra Chen" />
              </div>
              <h3>Dr. Alexandra Chen</h3>
              <p className="member-role">Chief Academic Officer</p>
              <p className="member-bio">Harvard-educated researcher specializing in elite performance psychology.</p>
              <div className="member-social">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="team-member animate">
              <div className="member-image">
                <img src="https://source.unsplash.com/random/300x300/?tech,man" alt="David Williams" />
              </div>
              <h3>David Williams</h3>
              <p className="member-role">Chief Technology Officer</p>
              <p className="member-bio">Former Silicon Valley executive with expertise in cloud infrastructure and AWS.</p>
              <div className="member-social">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Join The Elite?</h2>
          <p>Take the first step toward extraordinary achievement</p>
          <Link to="/contact" className="btn btn-primary pulse-animation">Apply Now</Link>
        </div>
      </section>
    </main>
  );
};