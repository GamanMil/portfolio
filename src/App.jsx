import './App.css'
import profileImage from './assets/IMG-20241012-WA0009.jpg'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.documentElement.style.setProperty('--scroll', scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="animated-bg">
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
        <div className="bg-circle"></div>
      </div>
      
      <div className="about-me-container">
        <header className="header">
          <h1>About Me</h1>
        </header>
        
        <main className="main-content">
          <section className="profile-section">
            <div className="profile-image">
              <img src={profileImage} alt="Profile" />
            </div>
            
            <div className="profile-info">
              <h2>Your Name</h2>
              <p className="title">Web Developer</p>
              <p className="bio">
                I'm a passionate web developer with a keen interest in creating beautiful and functional web applications.
                I specialize in modern web technologies and love to solve complex problems through clean, efficient code.
              </p>
            </div>
          </section>

          <section className="skills-section">
            <h3>Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">React</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">HTML/CSS</div>
              <div className="skill-item">Node.js</div>
            </div>
          </section>

          <section className="contact-section">
            <h3>Get in Touch</h3>
            <div className="contact-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:your.email@example.com">Email</a>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
