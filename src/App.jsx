import './App.css'
import profileImage from './assets/IMG-20241012-WA0009.jpg'
import { useEffect, useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeSkillCategory, setActiveSkillCategory] = useState('languages');
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

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

  const workItems = [
    {
      id: 1,
      title: "Freelance Web Development",
      description: "I built and looked after websites for several small roofing companies. This included designing how the websites looked and worked, building the parts users see, and managing the technical background parts like servers and databases.\n\nCommunicating with clients was a key part of my job. I talked with them to understand what they needed for their business, turned their ideas into clear plans, and made sure we were on the same page throughout the project.\n\nI also handled their website addresses (domain names), including technical setup and security. On top of that, I worked on making their websites easier to find on search engines like Google (SEO). This helped them get more visitors and potential customers.",
      imageUrl: "",
      tags: ["Web Design", "Backend Development", "Client Communication", "SEO"]
    },
    {
      id: 2,
      title: "AI-Powered Gaming Assistant",
      description: "As a key contributor to a hackathon-winning project, I developed an innovative AI-driven screen analysis software specifically designed to enhance gaming experiences for disabled and less experienced players. This application utilized machine learning algorithms to interpret on-screen information in real-time. \n\nCore functionalities included leveraging text-to-speech (TTS) technology and dynamic subtitles to provide clear, audible, and visual explanations of game elements, events, and user interface components. The system aimed to bridge the accessibility gap in gaming by offering intuitive feedback and guidance, thereby empowering a wider range of individuals to participate and enjoy gaming. The project's success at the hackathon underscored its novel approach and potential impact on accessible game design.",
      imageUrl: "",
      tags: ["AI", "Machine Learning", "Accessibility", "TTS", "Game Development", "Hackathon Winner"]
    },
    {
      id: 4,
      title: "Web3 Blockchain Transaction App (Stellar Hackathon)",
      description: "During the Stellar x EasyA hackathon, I contributed to the development of a Web3 application focused on blockchain transactions. My role involved utilizing Stellar's SDK and Rust for robust backend development, where I focused on simulating and processing blockchain transactions within Stellar's testnet environment. This required a deep dive into the intricacies of the Stellar network and its transaction protocols.\n\nIn addition to backend responsibilities, I also developed a functional front-end interface using HTML and JavaScript. This interface allowed users to interact with the blockchain simulation, providing a practical demonstration of the application's capabilities. The project served as a valuable experience in Web3 technologies, blockchain fundamentals, and rapid prototyping in a hackathon setting.",
      imageUrl: "",
      tags: ["Web3", "Blockchain", "Stellar SDK", "Rust", "HTML", "JavaScript", "Hackathon"]
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

  const nextWorkItem = () => {
    setCurrentWorkIndex((prevIndex) => (prevIndex + 1) % workItems.length);
  };

  const prevWorkItem = () => {
    setCurrentWorkIndex((prevIndex) => (prevIndex - 1 + workItems.length) % workItems.length);
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
            <div className="work-carousel">
              {workItems.length > 0 && (
                <div className="work-item-card">
                  {workItems[currentWorkIndex].imageUrl && (
                    <div className="work-item-image-container">
                      <img src={workItems[currentWorkIndex].imageUrl} alt={workItems[currentWorkIndex].title} className="work-item-image" />
                    </div>
                  )}
                  <div className="work-item-content">
                    <h3>{workItems[currentWorkIndex].title}</h3>
                    <div className="work-item-description-scrollable">
                      {workItems[currentWorkIndex].description.split('\n\n').map((paragraph, paraIndex) => (
                        <p key={paraIndex}>{paragraph}</p>
                      ))}
                    </div>
                    {workItems[currentWorkIndex].tags && workItems[currentWorkIndex].tags.length > 0 && (
                      <div className="work-item-tags">
                        {workItems[currentWorkIndex].tags.map((tag, index) => (
                          <span key={index} className="work-item-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
              {workItems.length > 1 && (
                <div className="work-carousel-controls">
                  <button onClick={prevWorkItem}>Previous</button>
                  <button onClick={nextWorkItem}>Next</button>
                </div>
              )}
            </div>

            <div className="subsection qualifications-section">
              <h3>Qualifications</h3>
              <div className="qualification-item">
                <div className="qualification-main-info">
                  <h4>BSc Computer Science and Artificial Intelligence</h4>
                  <p className="university-name">University of Sussex</p>
                </div>
                <div className="qualification-side-details">
                  <p className="graduation-date">Expected Graduation: Jun. 2027</p>
                  <p className="honours-status"><em>On track for First-Class Honours</em></p>
                  <p className="qualification-description">Dedicated Computer Science student, passionate about machine learning.</p>
                </div>
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
