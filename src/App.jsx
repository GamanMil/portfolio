import './App.css'
import profileImage from './assets/2581.gif'
import { useEffect, useState, useCallback, memo } from 'react'

const FAVORITE_BOOKS = [
  {
    title: "Heaven - Meiko Kawakami",
    imageUrl: "/src/assets/heaven.jpg",
    altText: "Cover of Heaven by Meiko Kawakami"
  },
  {
    title: "No Longer Human - Osamu Dazai",
    imageUrl: "/src/assets/nolongerhuman.jpg",
    altText: "Cover of No Longer Human by Osamu Dazai"
  },
  {
    title: "The Brothers Karamazov - Fyodor Dostoevsky",
    imageUrl: "/src/assets/brotherskaramazov.jpg",
    altText: "Cover of The Brothers Karamazov by Fyodor Dostoevsky"
  },
  {
    title: "The Death of Ivan Ilyich - Leo Tolstoy",
    imageUrl: "/src/assets/thedeathofivan.jpg",
    altText: "Cover of The Death of Ivan Ilyich by Leo Tolstoy"
  },
  {
    title: "Crime and Punishment - Fyodor Dostoevsky",
    imageUrl: "/src/assets/crimeandpunishment.jpg",
    altText: "Cover of Crime and Punishment by Fyodor Dostoevsky"
  },
  {
    title: "Curious Incident of the Dog in the Night-Time - Mark Haddon",
    imageUrl: "/src/assets/curiousincident.jpg",
    altText: "Cover of Curious Incident of the Dog in the Night-Time by Mark Haddon"
  }
];

const WORK_ITEMS = [
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

const SKILL_CATEGORIES = {
  languages: {
    title: "Languages",
    skills: ["Python", "JavaScript", "Java", "C#"]
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

const PARTICLE_POSITIONS = [
  { left: '10%', top: '20%', delay: 0 },
  { left: '20%', top: '40%', delay: -2 },
  { left: '30%', top: '60%', delay: -4 },
  { left: '40%', top: '80%', delay: -6 },
  { left: '50%', top: '20%', delay: -8 },
  { left: '60%', top: '40%', delay: -10 },
  { left: '70%', top: '60%', delay: -12 },
  { left: '80%', top: '80%', delay: -14 },
  { left: '90%', top: '30%', delay: -16 },
  { left: '25%', top: '70%', delay: -18 }
];

const BookCarousel = memo(({ books }) => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  return (
    <div className="book-carousel-container">
      <div className="book-carousel">
        {[...books, ...books].map((book, index) => (
          <div key={index} className="book-item">
            <img 
              src={book.imageUrl} 
              alt={book.altText} 
              className="book-cover" 
              loading="lazy"
              onError={handleImageError}
            />
            <p className="book-title">{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeSkillCategory, setActiveSkillCategory] = useState('languages');
  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

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

    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler);
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, []);

  const nextWorkItem = useCallback(() => {
    setCurrentWorkIndex((prevIndex) => (prevIndex + 1) % WORK_ITEMS.length);
  }, []);

  const prevWorkItem = useCallback(() => {
    setCurrentWorkIndex((prevIndex) => (prevIndex - 1 + WORK_ITEMS.length) % WORK_ITEMS.length);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
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
  }, []);

  const handleSkillCategoryChange = useCallback((category) => {
    setActiveSkillCategory(category);
  }, []);

  const currentWork = WORK_ITEMS[currentWorkIndex];

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
          {PARTICLE_POSITIONS.map((pos, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: pos.left,
                top: pos.top,
                animationDelay: `${pos.delay}s`
              }}
            />
          ))}
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
                    {Object.entries(SKILL_CATEGORIES).map(([key, category]) => (
                      <button
                        key={key}
                        className={`category-btn ${activeSkillCategory === key ? 'active' : ''}`}
                        onClick={() => handleSkillCategoryChange(key)}
                      >
                        {category.title}
                      </button>
                    ))}
                  </div>
                  <div className="skills-display">
                    <h3>{SKILL_CATEGORIES[activeSkillCategory].title}</h3>
                    <div className="skills-grid">
                      {SKILL_CATEGORIES[activeSkillCategory].skills.map((skill, index) => (
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
                <BookCarousel books={FAVORITE_BOOKS} />
              </div>
            </div>
          </section>

          <section id="work" className="section">
            <h2>My Work</h2>
            <div className="work-carousel">
              <div className="work-item-card">
                {currentWork.imageUrl && (
                  <div className="work-item-image-container">
                    <img 
                      src={currentWork.imageUrl} 
                      alt={currentWork.title} 
                      className="work-item-image" 
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="work-item-content">
                  <h3>{currentWork.title}</h3>
                  <div className="work-item-description-scrollable">
                    {currentWork.description.split('\n\n').map((paragraph, paraIndex) => (
                      <p key={paraIndex}>{paragraph}</p>
                    ))}
                  </div>
                  {currentWork.tags?.length > 0 && (
                    <div className="work-item-tags">
                      {currentWork.tags.map((tag, index) => (
                        <span key={index} className="work-item-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {WORK_ITEMS.length > 1 && (
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
