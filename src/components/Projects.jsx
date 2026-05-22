import { ExternalLink, Code, Video } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'RapidCare AI',
      description: 'An AI-powered healthcare platform designed to streamline patient intake and diagnosis assistance. Implemented with focus on efficiency and accuracy in medical environments.',
      tech: ['React', 'Node.js', 'AI Integration'],
      demoLink: 'https://www.youtube.com/watch?v=t2oHcBE8UQg&t=2s',
      githubLink: '#',
      image: '/scarlet-med-tech.png',
      impact: 'Improved potential patient intake processing time by 30% through automated AI assistance.'
    },
    {
      title: 'Student Task Management',
      description: 'A comprehensive task management system built specifically for students. Features full CRUD functionality to help users organize assignments, deadlines, and study schedules effectively.',
      tech: ['Node.js', 'Express', 'MySQL', 'JavaScript'],
      demoLink: '#',
      githubLink: '#',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      impact: 'Designed a normalized MySQL database schema that supports robust data integrity and efficient querying.'
    },
    {
      title: 'Charity Water Landing Page',
      description: 'A responsive and visually engaging landing page designed to drive donations and spread awareness for clean water initiatives.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      demoLink: 'https://mhjgeew5no.wpdns.site/',
      githubLink: '#',
      image: '/charity-water.png',
      impact: 'Built a highly accessible, mobile-first design with smooth micro-animations to enhance user engagement.'
    },
    {
      title: 'Personal Business Web Project',
      description: 'A premium web development agency website crafting high-performance digital experiences for businesses ready to scale.',
      tech: ['Web Development', 'Design', 'Strategy'],
      demoLink: 'https://www.grasaiastudios.com/',
      githubLink: '#',
      image: '/grasaia-studios.png',
      impact: 'Designed and built a custom premium portfolio to attract new clients and showcase technical expertise.'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.githubLink !== '#' && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="View Source">
                        <Code size={24} />
                      </a>
                    )}
                    {project.demoLink !== '#' && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" title="View Demo">
                        {project.demoLink.includes('youtube.com') ? <Video size={24} /> : <ExternalLink size={24} />}
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-impact">
                  <strong>Impact:</strong> {project.impact}
                </div>
                <ul className="project-tech-list flex gap-2">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="project-tech-item">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
