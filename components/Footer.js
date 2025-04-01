const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>The 1% University</h3>
            <p>Elevating extraordinary potential</p>
            <div className="footer-social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Programs</h4>
              <ul>
                <li><Link to="/programs">Executive Leadership</Link></li>
                <li><Link to="/programs">Wealth Mastery</Link></li>
                <li><Link to="/programs">Entrepreneurship</Link></li>
                <li><Link to="/programs">AWS Cloud Engineering</Link></li>
                <li><Link to="/programs">View All Programs</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>About</h4>
              <ul>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/about">Leadership Team</Link></li>
                <li><Link to="/about">Faculty & Mentors</Link></li>
                <li><Link to="/client-success">Success Stories</Link></li>
                <li><Link to="/about">Careers</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Podcast</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Media Kit</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Connect</h4>
              <ul>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Partner With Us</a></li>
                <li><a href="#">Alumni Network</a></li>
                <li><a href="#">Donate</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Accessibility</a>
          </div>
          <p>&copy; 2025 The 1% University. All rights reserved.</p>
        </div>
        
        <div className="book-now-floating">
          <Link to="/contact" className="btn btn-primary pulse-animation book-now-btn">Book Now</Link>
        </div>
      </div>
    </footer>
  );
};