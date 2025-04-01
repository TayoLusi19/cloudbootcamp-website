const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
    preferredTime: '',
  });
  
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
      console.log('Form submitted with values:', formData);
    }, 1500);
  };
  
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
      <section className="page-banner contact-banner">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Book a consultation or apply for our elite programs</p>
        </div>
      </section>
      
      <section className="contact-options">
        <div className="container">
          <div className="options-grid">
            <div className="option-card animate">
              <div className="option-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3>Book a Consultation</h3>
              <p>Schedule a 1-on-1 session with an admissions advisor to discuss your goals and explore our programs.</p>
              <a href="#booking-form" className="btn btn-primary book-now-btn">Book Now</a>
            </div>
            
            <div className="option-card animate">
              <div className="option-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3>Apply to a Program</h3>
              <p>Submit your application for one of our transformative educational programs.</p>
              <a href="#application-form" className="btn btn-secondary">Apply Now</a>
            </div>
            
            <div className="option-card animate">
              <div className="option-icon">
                <i className="fas fa-info-circle"></i>
              </div>
              <h3>Request Information</h3>
              <p>Get detailed program information, brochures, and answers to your questions.</p>
              <a href="#info-form" className="btn btn-secondary">Request Info</a>
            </div>
          </div>
        </div>
      </section>
      
      <section id="booking-form" className="booking-section">
        <div className="container">
          <h2 className="section-title animate">Book Your Consultation</h2>
          <p className="booking-intro animate">Schedule a personalized consultation with our admissions team to discuss your career goals and how our programs can help you achieve them.</p>
          
          <div className="booking-container animate">
            {!formSubmitted ? (
              <div className="booking-content">
                <div className="booking-calendar">
                  <h3>Select a Date & Time</h3>
                  <div className="calendar-widget">
                    <div className="calendar-header">
                      <button className="calendar-nav"><i className="fas fa-chevron-left"></i></button>
                      <h4>April 2025</h4>
                      <button className="calendar-nav"><i className="fas fa-chevron-right"></i></button>
                    </div>
                    <div className="calendar-grid">
                      {/* Simplified calendar display */}
                      <div className="calendar-day unavailable">1</div>
                      <div className="calendar-day unavailable">2</div>
                      <div className="calendar-day">3</div>
                      <div className="calendar-day">4</div>
                      <div className="calendar-day weekend">5</div>
                      <div className="calendar-day weekend">6</div>
                      <div className="calendar-day">7</div>
                      <div className="calendar-day">8</div>
                      <div className="calendar-day">9</div>
                      <div className="calendar-day selected">10</div>
                      <div className="calendar-day">11</div>
                      <div className="calendar-day weekend">12</div>
                      <div className="calendar-day weekend">13</div>
                      <div className="calendar-day">14</div>
                    </div>
                    
                    <div className="time-slots">
                      <h4>Available Times - Apr 10</h4>
                      <div className="time-slot-grid">
                        <div className="time-slot">9:00 AM</div>
                        <div className="time-slot">10:30 AM</div>
                        <div className="time-slot selected">1:00 PM</div>
                        <div className="time-slot">2:30 PM</div>
                        <div className="time-slot">4:00 PM</div>
                        <div className="time-slot">5:30 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="booking-form">
                  <h3>Your Information</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="program">Program of Interest *</label>
                      <select 
                        id="program" 
                        name="program" 
                        value={formData.program}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a Program</option>
                        <option value="executive">Executive Leadership</option>
                        <option value="wealth">Wealth Mastery</option>
                        <option value="entrepreneurship">Entrepreneurship</option>
                        <option value="aws">AWS Cloud Engineering</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Additional Information</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="preferredTime">Preferred Time</label>
                      <input 
                        type="text" 
                        id="preferredTime" 
                        name="preferredTime" 
                        value="April 10, 2025 at 1:00 PM EST" 
                        readOnly 
                      />
                    </div>
                    
                    <button type="submit" className="btn btn-primary book-now-btn" disabled={isLoading}>
                      {isLoading ? (
                        <span><i className="fas fa-spinner fa-spin"></i> Processing...</span>
                      ) : (
                        'Confirm Booking'
                      )}
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="success-message">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3>Booking Confirmed!</h3>
                <p>Your consultation has been scheduled for:</p>
                <div className="booking-details">
                  <p className="booking-date">April 10, 2025 at 1:00 PM EST</p>
                  <p>Program: {formData.program === 'executive' ? 'Executive Leadership' : 
                              formData.program === 'wealth' ? 'Wealth Mastery' : 
                              formData.program === 'entrepreneurship' ? 'Entrepreneurship' : 'AWS Cloud Engineering'}</p>
                </div>
                <p>A confirmation email has been sent to {formData.email} with all the details and a calendar invitation.</p>
                <div className="success-actions">
                  <a href="#" className="btn btn-secondary">Add to Calendar</a>
                  <a href="#" className="btn btn-primary">Return to Home</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="contact-details">
        <div className="container">
          <div className="details-grid">
            <div className="detail-card animate">
              <div className="detail-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Locations</h3>
              <ul className="detail-list">
                <li>New York: 500 Fifth Avenue, 45th Floor</li>
                <li>San Francisco: 555 California Street, Suite 400</li>
                <li>London: 30 St Mary Axe, 28th Floor</li>
                <li>Singapore: Marina Bay Financial Centre, Tower 1</li>
              </ul>
            </div>
            
            <div className="detail-card animate">
              <div className="detail-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Contact Information</h3>
              <ul className="detail-list">
                <li>General Inquiries: info@1percentuniversity.com</li>
                <li>Admissions: admissions@1percentuniversity.com</li>
                <li>Phone: +1 (888) 555-1000</li>
                <li>Hours: Monday-Friday, 9 AM - 6 PM EST</li>
              </ul>
            </div>
            
            <div className="detail-card animate">
              <div className="detail-icon">
                <i className="fas fa-question-circle"></i>
              </div>
              <h3>Frequently Asked Questions</h3>
              <ul className="detail-list faq-list">
                <li><a href="#">What are the admissions requirements?</a></li>
                <li><a href="#">Is financial aid available?</a></li>
                <li><a href="#">How are programs structured?</a></li>
                <li><a href="#">View all FAQs →</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};