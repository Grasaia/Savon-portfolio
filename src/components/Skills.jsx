import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3/Vanilla CSS', 'TailwindCSS', 'Vite']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'Authentication']
    },
    {
      title: 'Database & Tools',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'GitHub', 'Figma']
    }
  ];

  return (
    <section id="skills" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-bullet"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
