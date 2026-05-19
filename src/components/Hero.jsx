import { ArrowRight, Code, User } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="about" className="hero-section flex items-center">
      <div className="container">
        <div className="hero-content animate-fade-in">
          <p className="hero-subtitle">Hi, my name is</p>
          <h1 className="hero-title">Savon Dugger.</h1>
          <h2 className="hero-title text-gradient">I build full-stack experiences.</h2>
          
          <p className="hero-description">
            I'm a fourth-year Info Tech & Management Major with a passion for software engineering. 
            I specialize in building (and occasionally designing) exceptional digital experiences 
            that solve real-world problems.
          </p>
          
          <div className="hero-cta flex gap-4 mt-8">
            <a href="#projects" className="btn btn-primary flex items-center gap-2">
              View My Work <ArrowRight size={18} />
            </a>
            <div className="social-links flex items-center gap-4 ml-4">
              <a href="https://github.com/Grasaia" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Code size={24} />
              </a>
              <a href="https://www.linkedin.com/in/savon-dugger" target="_blank" rel="noopener noreferrer" className="social-icon">
                <User size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
