const Testimonials = () => {
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
          <h1>Testimonials</h1>
          <p>Hear from our successful graduates and program participants</p>
        </div>
      </section>
      
      <section className="testimonials-overview">
        <div className="container">
          <div className="testimonials-video animate">
            <div className="video-container">
              <img src="https://source.unsplash.com/random/1200x600/?success" alt="Success Stories" />
              <div className="play-button">
                <i className="fas fa-play"></i>
              </div>
            </div>
            <p className="video-caption">"Our graduates share their journeys to extraordinary success"</p>
          </div>
          
          <div className="testimonial-stats animate">
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-description">of graduates report significant career advancement</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-description">average program satisfaction rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">58%</div>
              <div className="stat-description">average salary increase post-graduation</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonial-categories">
        <div className="container">
          <div className="category-tabs animate">
            <button className="category-tab active">All Testimonials</button>
            <button className="category-tab">Executive Leadership</button>
            <button className="category-tab">Wealth Mastery</button>
            <button className="category-tab">Entrepreneurship</button>
            <button className="category-tab">AWS Cloud Engineering</button>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card animate">
              <div className="testimonial-content">
                <p>"The 1% University completely transformed my approach to business. Within six months of completing the program, I secured venture funding and launched my startup."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://source.unsplash.com/random/100x100/?woman" alt="Sarah Johnson" />
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>Founder & CEO, InnovateX</p>
                  <p className="program-tag">Entrepreneurship Program</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card animate">
              <div className="testimonial-content">
                <p>"The network and mentorship I gained through The 1% University accelerated my career by at least five years. The ROI has been phenomenal."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://source.unsplash.com/random/100x100/?man" alt="Michael Chen" />
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <p>VP of Operations, Fortune 500 Company</p>
                  <p className="program-tag">Executive Leadership Program</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card animate">
              <div className="testimonial-content">
                <p>"I was skeptical about the bold claims, but the program delivered. My investment portfolio has outperformed the market by 3x since implementing the strategies I learned."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://source.unsplash.com/random/100x100/?woman,professional" alt="Jennifer Patel" />
                <div className="author-info">
                  <h4>Jennifer Patel</h4>
                  <p>Managing Director, JP Investment Group</p>
                  <p className="program-tag">Wealth Mastery Program</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card animate">
              <div className="testimonial-content">
                <p>"The AWS Cloud Engineering program was intense but worth every minute. Within weeks of graduating, I had multiple job offers with compensation packages over $200K."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://source.unsplash.com/random/100x100/?man,tech" alt="David Rodriguez" />
                <div className="author-info">
                  <h4>David Rodriguez</h4>
                  <p>Senior Cloud Architect, TechGiant Inc.</p>
                  <p className="program-tag">AWS Cloud Engineering Program</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card animate">
              <div className="testimonial-content">
                <p>"The leadership techniques I learned helped me navigate a complex merger that resulted in a 40% increase in company value. This program pays for itself many times over."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://source.unsplash.com/random/100x100/?woman,executive" alt="Laura Thompson" />
                <div className="author-info">
                  <h4>Laura Thompson</h4>
                  <p>COO, MergerPro Solutions</p>
                  <p className="program-tag">Executive Leadership Program</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card animate">
              <div className="testimonial-content">
                <p>"I went from a struggling consultant to running a 7-figure business in 18 months by applying the systems and strategies from the program. Life-changing is an understatement."</p>
              </div>
              <div className="testimonial-author">
                <img src="https://source.unsplash.com/random/100x100/?man,entrepreneur" alt="James Wilson" />
                <div className="author-info">
                  <h4>James Wilson</h4>
                  <p>Founder, WilsonTraining Systems</p>
                  <p className="program-tag">Entrepreneurship Program</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-pagination animate">
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <button className="pagination-btn next">Next</button>
          </div>
        </div>
      </section>
      
      <section className="featured-companies">
        <div className="container">
          <h2 className="section-title animate">Where Our Graduates Work</h2>
          <div className="companies-grid animate">
            <div className="company-logo">
              <img src="https://placehold.co/200x80?text=Google" alt="Google" />
            </div>
            <div className="company-logo">
              <img src="https://placehold.co/200x80?text=Amazon" alt="Amazon" />
            </div>
            <div className="company-logo">
              <img src="https://placehold.co/200x80?text=Microsoft" alt="Microsoft" />
            </div>
            <div className="company-logo">
              <img src="https://placehold.co/200x80?text=Apple" alt="Apple" />
            </div>
            <div className="company-logo">
              <img src="https://placehold.co/200x80?text=Meta" alt="Meta" />
            </div>
            <div className="company-logo">
              <img src="https://placehold.co/200x80?text=Netflix" alt="Netflix" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Write Your Success Story?</h2>
          <p>Join thousands who have transformed their careers and lives</p>
          <a href="#" className="btn btn-primary pulse-animation book-now-btn">Book a Consultation</a>
        </div>
      </section>
    </main>
  );
};