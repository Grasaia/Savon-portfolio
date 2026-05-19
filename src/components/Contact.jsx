import { Mail, MapPin, Code, User, Video } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="section-padding">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>Let's Connect</h2>
            <p className="contact-description">
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>savon.dugger@example.com</span> {/* Placeholder email */}
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>Available for Relocation</span>
              </div>
            </div>

            <div className="social-links flex gap-4 mt-8">
              <a href="https://github.com/Grasaia" target="_blank" rel="noopener noreferrer" className="social-btn">
                <Code size={20} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/savon-dugger" target="_blank" rel="noopener noreferrer" className="social-btn">
                <User size={20} /> LinkedIn
              </a>
              <a href="https://www.youtube.com/@Grasaia" target="_blank" rel="noopener noreferrer" className="social-btn">
                <Video size={20} /> YouTube
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Savon Dugger. Designed & Built with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
