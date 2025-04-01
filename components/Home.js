const Home = () => {
  // Animation hook for elements
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
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="animate">Elevate Your Potential</h2>
            <p className="animate">Join the elite 1% through transformative education and mentorship</p>
            <div className="hero-buttons animate">
              <Link to="/programs" className="btn btn-primary">Explore Programs</Link>
              <Link to="/client-success" className="btn btn-secondary">Success Stories</Link>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <p>Scroll to discover</p>
        </div>
      </section>
      
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title animate">About Us</h2>
          <div className="about-content">
            <div className="about-text animate">
              <p>The 1% University was founded on the principle that extraordinary success requires extraordinary education. We provide elite training programs designed to develop the mindset, skills, and network that separate the exceptional from the ordinary.</p>
              <p>Our curriculum combines cutting-edge industry knowledge, personalized mentorship, and practical experience to create transformative learning experiences.</p>
              <Link to="/about" className="btn btn-secondary">Learn More</Link>
            </div>
            <div className="about-stats">
              <div className="stat animate">
                <span className="stat-number">95%</span>
                <span className="stat-text">Career Advancement Rate</span>
              </div>
              <div className="stat animate">
                <span className="stat-number">200+</span>
                <span className="stat-text">Industry Experts</span>
              </div>
              <div className="stat animate">
                <span className="stat-number">10k+</span>
                <span className="stat-text">Alumni Network</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="programs" className="programs">
        <div className="container">
          <h2 className="section-title animate">Our Programs</h2>
          <div className="programs-grid">
            <div className="program-card animate">
              <div className="program-icon">💼</div>
              <h3>Executive Leadership</h3>
              <p>Develop the strategic vision and leadership skills required to guide organizations through transformation and growth.</p>
              <Link to="/programs" className="btn btn-secondary">Learn More</Link>
            </div>
            <div className="program-card animate">
              <div className="program-icon">💰</div>
              <h3>Wealth Mastery</h3>
              <p>Master the principles of wealth creation, investment strategies, and financial independence.</p>
              <Link to="/programs" className="btn btn-secondary">Learn More</Link>
            </div>
            <div className="program-card animate">
              <div className="program-icon">🚀</div>
              <h3>Entrepreneurship</h3>
              <p>Learn how to identify opportunities, build scalable businesses, and disrupt industries.</p>
              <Link to="/programs" className="btn btn-secondary">Learn More</Link>
            </div>
            <div className="program-card animate">
              <div className="program-icon">☁️</div>
              <h3>AWS Cloud Engineering</h3>
              <p>Master cloud architecture, DevOps, and infrastructure management to become a high-earning AWS professional.</p>
              <Link to="/client-success" className="btn btn-primary">See Success Stories</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Transform Your Future?</h2>
          <p>Our programs have helped thousands achieve extraordinary success</p>
          <Link to="/contact" className="btn btn-primary pulse-animation">Book a Consultation</Link>
        </div>
      </section>
      
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title animate">Success Stories</h2>
          <div className="testimonial-slider">
            <div className="testimonial animate">
              <p className="testimonial-text">"The 1% University completely transformed my approach to business. Within six months of completing the program, I secured venture funding and launched my startup."</p>
              <div className="testimonial-author">
                <h4>Sarah Johnson</h4>
                <p>Founder & CEO, InnovateX</p>
              </div>
            </div>
            <div className="testimonial animate">
              <p className="testimonial-text">"The network and mentorship I gained through The 1% University accelerated my career by at least five years. The ROI has been phenomenal."</p>
              <div className="testimonial-author">
                <h4>Michael Chen</h4>
                <p>VP of Operations, Fortune 500 Company</p>
              </div>
            </div>
          </div>
          <div className="testimonial-nav">
            <Link to="/client-success" className="btn btn-secondary">View All Success Stories</Link>
          </div>
        </div>
      </section>
    </main>
  );
};