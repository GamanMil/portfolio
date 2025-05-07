import './App.css'
import profileImage from './assets/IMG-20241012-WA0009.jpg'
import { useEffect, useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeSkillCategory, setActiveSkillCategory] = useState('languages');

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C#", "SQL"]
    },
    web: {
      title: "Web Development",
      skills: ["React", "HTML/CSS", "Node.js", "Express", "REST APIs"]
    },
    ai: {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"]
    },
    tools: {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Linux", "VS Code"]
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="nav-menu">
        <div className="nav-container">
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a 
            href="#work" 
            className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('work');
            }}
          >
            My Work
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="animated-bg">
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
      
      <div className="intro-section">
        <div className="intro-text">
          <h1 className="dynamic-text">Hey, I'm Ben</h1>
          <p className="intro-subtitle">CS + AI Student</p>
        </div>
      </div>

      <div className="about-me-container">
        <main className="main-content">
          <section id="about" className="section">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="profile-image">
                <img src={profileImage} alt="Profile" />
              </div>
              <div className="about-text">
                <p>
                  I'm a passionate computer science + AI student with a keen interest in software development and machine learning.
                  I am looking for opportunities to grow and expand my skills.
                </p>
                
                <div className="skills-slider">
                  <div className="skills-categories">
                    <button className="category-btn active">Temp</button>
                    <button className="category-btn">Temp</button>
                    <button className="category-btn">Temp</button>
                    <button className="category-btn">Temp</button>
                  </div>
                  
                  <div className="skills-display">
                    <h3>Temp</h3>
                    <div className="skills-grid">
                      <div className="skill-item">Temp</div>
                      <div className="skill-item">Temp</div>
                      <div className="skill-item">Temp</div>
                      <div className="skill-item">Temp</div>
                      <div className="skill-item">Temp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* My Work Section */}
          <section id="work" className="section">
            <h2>My Work</h2>
            <div className="work-grid">
              <div className="work-item">
                <h3>Temp</h3>
                <p>Temp</p>
              </div>
              <div className="work-item">
                <h3>Temp</h3>
                <p>Temp</p>
              </div>
              <div className="work-item">
                <h3>Temp</h3>
                <p>Temp</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section">
            <h2>Contact Me</h2>
            <div className="contact-content">
              <p>Feel free to reach out to me through any of these platforms:</p>
              <div className="contact-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:your.email@example.com">Email</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
