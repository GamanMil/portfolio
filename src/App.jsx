import './App.css'
import profileImage from './assets/IMG-20241012-WA0009.jpg'
import { useEffect, useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeSkillCategory, setActiveSkillCategory] = useState('languages');

  const favoriteBooks = [
    {
      title: "Heaven - Meiko Kawakami",
      imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/81x87I8xiJS._SL1500_.jpg",
      altText: "Cover of Heaven by Meiko Kawakami"
    },
    {
      title: "No Longer Human - Osamu Dazai",
      imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/41alKvN9GwL._SL1200_.jpg",
      altText: "Cover of No Longer Human by Osamu Dazai"
    },
    {
      title: "The Brothers Karamazov - Fyodor Dostoevsky",
      imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/81IE8AwMvqL._SL1500_.jpg",
      altText: "Cover of The Brothers Karamazov by Fyodor Dostoevsky"
    },
    {
      title: "The Death of Ivan Ilyich - Leo Tolstoy",
      imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/51mtpkTPiQL._SL1500_.jpg",
      altText: "Cover of The Death of Ivan Ilyich by Leo Tolstoy"
    },
    {
      title: "Crime and Punishment - Fyodor Dostoevsky",
      imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/41q4TbGqMXL._SY445_SX342_.jpg",
      altText: "Cover of Crime and Punishment by Fyodor Dostoevsky"
    },
    {
      title: "Curious Incident of the Dog in the Night-Time - Mark Haddon",
      imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/716yNkJ5eGL._SL1108_.jpg",
      altText: "Cover of Curious Incident of the Dog in the Night-Time by Mark Haddon"
    }
  ];

  const skillCategories = {
    languages: {
      title: "Languages",
      skills: ["Python", "JavaScript", "Java", "SQL"]
    },
    web: {
      title: "Web Development",
      skills: ["React", "HTML/CSS", "Node.js", "REST APIs"]
    },
    ai: {
      title: "AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision"]
    },
    tools: {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Linux"]
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
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
                    {Object.entries(skillCategories).map(([key, category]) => (
                      <button
                        key={key}
                        className={`category-btn ${activeSkillCategory === key ? 'active' : ''}`}
                        onClick={() => setActiveSkillCategory(key)}
                      >
                        {category.title}
                      </button>
                    ))}
                  </div>
                  <div className="skills-display">
                    <h3>{skillCategories[activeSkillCategory].title}</h3>
                    <div className="skills-grid">
                      {skillCategories[activeSkillCategory].skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="subsection">
              <div className="favourite-books-section">
                <h4>Favourite Books</h4>
                <div className="book-carousel-container">
                  <div className="book-carousel">
                    {[...favoriteBooks, ...favoriteBooks].map((book, index) => (
                      <div key={index} className="book-item">
                        <img src={book.imageUrl} alt={book.altText} className="book-cover" />
                        <p className="book-title">{book.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="section">
            <h2>My Work</h2>
            <div className="work-grid">
              <div className="work-item">
                <h3>Freelance Web Development</h3>
                <p>I build and maintain several websites for small roofing companies, handling both the design and backend infrastructure. This taught me how to effectively communicate with clients to understand their needs. I also gained hands-on experience with domain management and search engine optimisation for businesses viewability.</p>
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

          <section id="contact" className="section">
            <h2>Contact Me</h2>
            <div className="contact-content">
              <p>Feel free to reach out to me through any of these platforms:</p>
              <div className="contact-links">
                <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>Email</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
