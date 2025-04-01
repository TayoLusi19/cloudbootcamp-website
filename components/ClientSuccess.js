const ClientSuccess = () => {
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
      <section className="page-banner aws-banner">
        <div className="container">
          <h1>AWS Cloud Engineer Success Stories</h1>
          <p>How our graduates built $200,000+ careers in cloud engineering</p>
        </div>
      </section>
      
      <section className="success-overview">
        <div className="container">
          <div className="success-metrics animate">
            <div className="metric-item">
              <div className="metric-number">$215K</div>
              <div className="metric-description">Average compensation package for our AWS graduates</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">94%</div>
              <div className="metric-description">Job placement rate within 3 months</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">9</div>
              <div className="metric-description">Average job offers per graduate</div>
            </div>
          </div>
          
          <div className="success-intro animate">
            <p>Our AWS Cloud Engineering program has produced some of the highest-earning graduates in the tech industry. Through rigorous technical training, hands-on projects with real-world applications, and extensive career preparation, our students consistently secure positions with top companies at compensation levels that far exceed industry averages.</p>
            <p>Below, meet some of our successful graduates who have transformed their careers through our program.</p>
          </div>
        </div>
      </section>
      
      <section className="success-stories">
        <div className="container">
          <div className="success-story animate">
            <div className="story-image">
              <img src="https://source.unsplash.com/random/400x500/?man,professional" alt="Alex Thompson" />
            </div>
            <div className="story-content">
              <h2>Alex Thompson</h2>
              <div className="role-company">Principal Cloud Architect at FinTech Solutions</div>
              <div className="compensation">$230,000 Base + $80,000 Bonus + Equity</div>
              
              <div className="story-detail">
                <h3>Background</h3>
                <p>Prior to The 1% University: IT Support Specialist earning $65,000/year with basic cloud knowledge</p>
                
                <h3>The Transformation</h3>
                <p>"I was stuck in a support role with limited growth potential. The AWS Cloud Engineering program completely transformed my career trajectory. The curriculum was intense but perfectly structured to build expertise layer by layer. The hands-on labs and real-world projects gave me practical experience I couldn't have gained elsewhere."</p>
                
                <h3>The Result</h3>
                <p>"Within 6 weeks of graduating, I received multiple job offers. I accepted a position as a Cloud Engineer at a mid-sized tech company at $180K, and after proving myself for 18 months, I was recruited by FinTech Solutions for my current role with a compensation package over $310K. The ROI on this program has been astronomical."</p>
              </div>
              
              <div className="success-skills">
                <h3>Key Skills Acquired:</h3>
                <div className="skill-tags">
                  <span className="skill-tag">AWS Solutions Architecture</span>
                  <span className="skill-tag">Terraform</span>
                  <span className="skill-tag">Kubernetes</span>
                  <span className="skill-tag">CI/CD</span>
                  <span className="skill-tag">Microservices</span>
                </div>
              </div>
              
              <a href="#" className="btn btn-primary book-now-btn">Book a Consultation</a>
            </div>
          </div>
          
          <div className="success-story animate">
            <div className="story-image">
              <img src="https://source.unsplash.com/random/400x500/?woman,professional" alt="Sophia Martinez" />
            </div>
            <div className="story-content">
              <h2>Sophia Martinez</h2>
              <div className="role-company">Lead DevOps Engineer at TechGiant Inc.</div>
              <div className="compensation">$205,000 Base + $70,000 RSUs + Benefits</div>
              
              <div className="story-detail">
                <h3>Background</h3>
                <p>Prior to The 1% University: Junior Web Developer earning $78,000/year with no cloud experience</p>
                
                <h3>The Transformation</h3>
                <p>"I was a front-end developer looking to pivot into cloud engineering but didn't know where to start. The 1% University program gave me a clear roadmap and compressed what would have taken years of self-study into months of structured learning. The instructors were industry veterans who shared real-world insights you can't get from documentation or tutorials."</p>
                
                <h3>The Result</h3>
                <p>"I graduated with 5 AWS certifications and a portfolio of projects that demonstrated my abilities. After a competitive interview process, I landed a DevOps Engineer role at $165K, and within a year was promoted to Lead with a comprehensive package worth over $275K. The program didn't just teach technical skills—it prepared me to showcase my value to employers."</p>
              </div>
              
              <div className="success-skills">
                <h3>Key Skills Acquired:</h3>
                <div className="skill-tags">
                  <span className="skill-tag">DevOps</span>
                  <span className="skill-tag">CloudFormation</span>
                  <span className="skill-tag">AWS ECS/EKS</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Python</span>
                </div>
              </div>
              
              <a href="#" className="btn btn-primary book-now-btn">Book a Consultation</a>
            </div>
          </div>
          
          <div className="success-story animate">
            <div className="story-image">
              <img src="https://source.unsplash.com/random/400x500/?man,asian" alt="James Chen" />
            </div>
            <div className="story-content">
              <h2>James Chen</h2>
              <div className="role-company">Senior Cloud Security Architect at SecureCloud</div>
              <div className="compensation">$220,000 Base + $90,000 Performance Bonus</div>
              
              <div className="story-detail">
                <h3>Background</h3>
                <p>Prior to The 1% University: Network Administrator earning $92,000/year with basic security knowledge</p>
                
                <h3>The Transformation</h3>
                <p>"I had hit a ceiling in my network administration role and wanted to specialize in cloud security. The AWS Cloud Engineering program with the security specialization track gave me exactly what I needed. The curriculum was cutting-edge, covering security concepts that many companies are only now implementing."</p>
                
                <h3>The Result</h3>
                <p>"The specialized knowledge I gained made me a unicorn in the job market—someone who deeply understands both cloud infrastructure and security principles. I received an offer for $190K immediately after graduation, and a year later was recruited for my current role with a total compensation of $310K. This program didn't just increase my salary—it put me on an entirely different career trajectory."</p>
              </div>
              
              <div className="success-skills">
                <h3>Key Skills Acquired:</h3>
                <div className="skill-tags">
                  <span className="skill-tag">AWS Security Services</span>
                  <span className="skill-tag">IAM</span>
                  <span className="skill-tag">Compliance Frameworks</span>
                  <span className="skill-tag">Penetration Testing</span>
                  <span className="skill-tag">Security Automation</span>
                </div>
              </div>
              
              <a href="#" className="btn btn-primary book-now-btn">Book a Consultation</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="success-hiring-partners">
        <div className="container">
          <h2 className="section-title animate">Our AWS Hiring Partners</h2>
          <p className="hiring-intro animate">These industry-leading companies regularly recruit from our AWS Cloud Engineering program</p>
          
          <div className="partners-grid animate">
            <div className="partner-logo">
              <img src="https://placehold.co/200x100?text=Amazon" alt="Amazon" />
            </div>
            <div className="partner-logo">
              <img src="https://placehold.co/200x100?text=Microsoft" alt="Microsoft" />
            </div>
            <div className="partner-logo">
              <img src="https://placehold.co/200x100?text=Google" alt="Google" />
            </div>
            <div className="partner-logo">
              <img src="https://placehold.co/200x100?text=Netflix" alt="Netflix" />
            </div>
            <div className="partner-logo">
              <img src="https://placehold.co/200x100?text=Goldman+Sachs" alt="Goldman Sachs" />
            </div>
            <div className="partner-logo">
              <img src="https://placehold.co/200x100?text=J.P.+Morgan" alt="J.P. Morgan" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="program-details">
        <div className="container">
          <h2 className="section-title animate">AWS Cloud Engineering Program</h2>
          
          <div className="program-overview animate">
            <div className="program-highlights">
              <div className="highlight-item">
                <i className="fas fa-calendar-alt"></i>
                <h3>20 Weeks</h3>
                <p>Intensive training</p>
              </div>
              <div className="highlight-item">
                <i className="fas fa-users"></i>
                <h3>20 Students</h3>
                <p>Maximum per cohort</p>
              </div>
              <div className="highlight-item">
                <i className="fas fa-laptop-code"></i>
                <h3>15+ Projects</h3>
                <p>Build your portfolio</p>
              </div>
              <div className="highlight-item">
                <i className="fas fa-certificate"></i>
                <h3>5 AWS Certifications</h3>
                <p>Industry-recognized credentials</p>
              </div>
            </div>
            
            <div className="program-description">
              <p>Our AWS Cloud Engineering program is designed to transform participants into elite cloud professionals commanding top-tier compensation. The curriculum is constantly updated to reflect the latest AWS services, best practices, and industry demands.</p>
              <h3>Program Highlights:</h3>
              <ul>
                <li>Comprehensive technical training across the AWS ecosystem</li>
                <li>Hands-on projects that simulate real enterprise challenges</li>
                <li>Specialized tracks in Security, DevOps, or Architecture</li>
                <li>Interview preparation and salary negotiation strategies</li>
                <li>Lifetime access to alumni network and job opportunities</li>
              </ul>
              
              <div className="next-cohort">
                <h3>Next Cohort: May 1, 2025</h3>
                <p>Limited spots available. Early applications receive priority consideration.</p>
                <a href="#" className="btn btn-primary book-now-btn">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-banner aws-cta">
        <div className="container">
          <h2>Ready to Join the $200K Club?</h2>
          <p>Take the first step toward your high-earning AWS career</p>
          <a href="#" className="btn btn-primary pulse-animation book-now-btn">Book a Consultation</a>
        </div>
      </section>
    </main>
  );
};