const Programs = () => {
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
          <h1>Our Programs</h1>
          <p>Transformative education for exceptional achievement</p>
        </div>
      </section>

      <section className="program-overview">
        <div className="container">
          <p className="program-intro animate">Our intensive programs are designed to develop the skills, knowledge, and mindset required to excel in today's competitive landscape. Each program combines theoretical learning with practical application and personalized mentorship.</p>
          
          <div className="program-filters animate">
            <button className="filter-btn active">All Programs</button>
            <button className="filter-btn">Leadership</button>
            <button className="filter-btn">Technology</button>
            <button className="filter-btn">Entrepreneurship</button>
            <button className="filter-btn">Finance</button>
          </div>
        </div>
      </section>
      
      <section className="programs-detail">
        <div className="container">
          <div className="program-detail-card animate">
            <div className="program-card-header">
              <div className="program-icon">💼</div>
              <h2>Executive Leadership</h2>
              <div className="program-badge">Flagship Program</div>
            </div>
            <div className="program-card-body">
              <div className="program-description">
                <h3>Overview</h3>
                <p>Our Executive Leadership program transforms high-potential individuals into visionary leaders who can navigate complexity, inspire teams, and drive organizational success.</p>
                
                <h3>What You'll Learn</h3>
                <ul>
                  <li>Strategic thinking and decision-making in uncertain environments</li>
                  <li>Leading organizational transformation and change management</li>
                  <li>Building and scaling high-performance teams</li>
                  <li>Advanced communication and negotiation skills</li>
                  <li>Ethical leadership and corporate governance</li>
                </ul>
                
                <h3>Program Details</h3>
                <div className="program-details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">12 Weeks</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Format:</span>
                    <span className="detail-value">In-person or Online</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Investment:</span>
                    <span className="detail-value">$15,000</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Next Intake:</span>
                    <span className="detail-value">April 15, 2025</span>
                  </div>
                </div>
              </div>
              <div className="program-action">
                <a href="#" className="btn btn-primary book-now-btn">Apply Now</a>
                <a href="#" className="btn btn-secondary">Download Brochure</a>
              </div>
            </div>
          </div>
          
          <div className="program-detail-card animate">
            <div className="program-card-header">
              <div className="program-icon">💰</div>
              <h2>Wealth Mastery</h2>
            </div>
            <div className="program-card-body">
              <div className="program-description">
                <h3>Overview</h3>
                <p>Our Wealth Mastery program provides comprehensive training in financial literacy, investment strategies, and wealth building techniques used by the world's most successful individuals.</p>
                
                <h3>What You'll Learn</h3>
                <ul>
                  <li>Advanced investment strategies across multiple asset classes</li>
                  <li>Tax optimization and wealth preservation techniques</li>
                  <li>Building passive income streams and cash flow management</li>
                  <li>Real estate investing and portfolio management</li>
                  <li>Psychology of wealth and abundance mindset</li>
                </ul>
                
                <h3>Program Details</h3>
                <div className="program-details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">8 Weeks</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Format:</span>
                    <span className="detail-value">Online with Live Sessions</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Investment:</span>
                    <span className="detail-value">$8,500</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Next Intake:</span>
                    <span className="detail-value">May 1, 2025</span>
                  </div>
                </div>
              </div>
              <div className="program-action">
                <a href="#" className="btn btn-primary book-now-btn">Apply Now</a>
                <a href="#" className="btn btn-secondary">Download Brochure</a>
              </div>
            </div>
          </div>
          
          <div className="program-detail-card animate">
            <div className="program-card-header">
              <div className="program-icon">🚀</div>
              <h2>Entrepreneurship</h2>
            </div>
            <div className="program-card-body">
              <div className="program-description">
                <h3>Overview</h3>
                <p>Our Entrepreneurship program guides aspiring and current entrepreneurs through the process of building scalable, innovative businesses from idea to execution.</p>
                
                <h3>What You'll Learn</h3>
                <ul>
                  <li>Identifying high-potential business opportunities</li>
                  <li>Lean startup methodology and product-market fit</li>
                  <li>Business model design and validation</li>
                  <li>Fundraising strategies and investor relations</li>
                  <li>Scaling operations and building company culture</li>
                </ul>
                
                <h3>Program Details</h3>
                <div className="program-details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">16 Weeks</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Format:</span>
                    <span className="detail-value">Hybrid (Online + Weekend Intensives)</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Investment:</span>
                    <span className="detail-value">$12,000</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Next Intake:</span>
                    <span className="detail-value">June 15, 2025</span>
                  </div>
                </div>
              </div>
              <div className="program-action">
                <a href="#" className="btn btn-primary book-now-btn">Apply Now</a>
                <a href="#" className="btn btn-secondary">Download Brochure</a>
              </div>
            </div>
          </div>
          
          <div className="program-detail-card animate">
            <div className="program-card-header">
              <div className="program-icon">☁️</div>
              <h2>AWS Cloud Engineering</h2>
              <div className="program-badge">High Demand</div>
            </div>
            <div className="program-card-body">
              <div className="program-description">
                <h3>Overview</h3>
                <p>Our AWS Cloud Engineering program prepares you for a lucrative career designing, implementing, and managing cloud infrastructure for enterprises. Graduates consistently secure positions with $200,000+ annual compensation.</p>
                
                <h3>What You'll Learn</h3>
                <ul>
                  <li>AWS architecture and service portfolio mastery</li>
                  <li>Infrastructure as Code (IaC) with Terraform and CloudFormation</li>
                  <li>Containerization, Kubernetes, and microservices architecture</li>
                  <li>DevOps practices and CI/CD pipeline implementation</li>
                  <li>Cloud security, compliance, and cost optimization</li>
                </ul>
                
                <h3>Program Details</h3>
                <div className="program-details-grid">
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">20 Weeks</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Format:</span>
                    <span className="detail-value">Full-time Online with Labs</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Investment:</span>
                    <span className="detail-value">$18,500</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Next Intake:</span>
                    <span className="detail-value">May 1, 2025</span>
                  </div>
                </div>
              </div>
              <div className="program-action">
                <a href="#" className="btn btn-primary book-now-btn">Apply Now</a>
                <Link to="/client-success" className="btn btn-secondary">View Success Stories</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="program-faq">
        <div className="container">
          <h2 className="section-title animate">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item animate">
              <div className="faq-question">
                <h3>What are the admission requirements?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>Our programs are selective and require a combination of professional experience, academic background, and demonstrated potential. Each program has specific requirements, but generally we look for candidates with 3+ years of relevant experience and a track record of achievement.</p>
              </div>
            </div>
            <div className="faq-item animate">
              <div className="faq-question">
                <h3>Is financial aid available?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>Yes, we offer merit-based scholarships and flexible payment plans for qualified candidates. We also partner with several financing providers who offer competitive rates for educational funding.</p>
              </div>
            </div>
            <div className="faq-item animate">
              <div className="faq-question">
                <h3>What is the return on investment?</h3>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">
                <p>Our programs are designed to deliver significant ROI. On average, our graduates report a 40-60% increase in income within one year of completing our programs. For technical programs like AWS Cloud Engineering, many graduates secure positions with annual compensation exceeding $200,000.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Elevate Your Career?</h2>
          <p>Applications for our next cohorts are now open</p>
          <a href="#" className="btn btn-primary pulse-animation book-now-btn">Book a Consultation</a>
        </div>
      </section>
    </main>
  );
};