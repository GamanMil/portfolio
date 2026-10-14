import './App.css'
import { useEffect, useState, useCallback, memo } from 'react'

const imageUrl = (filename) => `${import.meta.env.BASE_URL}images/${filename}`

const profileImage = imageUrl('2581.gif')
const heavenImg = imageUrl('heaven.jpg')
const noLongerHumanImg = imageUrl('nolongerhuman.jpg')
const brothersKaramazovImg = imageUrl('brotherskaramazov.jpg')
const deathOfIvanImg = imageUrl('thedeathofivan.jpg')
const crimeAndPunishmentImg = imageUrl('crimeandpunishment.jpg')
const curiousIncidentImg = imageUrl('curiousincident.jpg')

const CONTACT_LINKS = {
  github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/GamanMil',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/benjaminmillward',
  email: import.meta.env.VITE_EMAIL || 'benjaminmillward06@gmail.com'
}

const FAVORITE_BOOKS = [
  {
    title: "Heaven - Meiko Kawakami",
    imageUrl: heavenImg,
    altText: "Cover of Heaven by Meiko Kawakami"
  },
  {
    title: "No Longer Human - Osamu Dazai",
    imageUrl: noLongerHumanImg,
    altText: "Cover of No Longer Human by Osamu Dazai"
  },
  {
    title: "The Brothers Karamazov - Fyodor Dostoevsky",
    imageUrl: brothersKaramazovImg,
    altText: "Cover of The Brothers Karamazov by Fyodor Dostoevsky"
  },
  {
    title: "The Death of Ivan Ilyich - Leo Tolstoy",
    imageUrl: deathOfIvanImg,
    altText: "Cover of The Death of Ivan Ilyich by Leo Tolstoy"
  },
  {
    title: "Crime and Punishment - Fyodor Dostoevsky",
    imageUrl: crimeAndPunishmentImg,
    altText: "Cover of Crime and Punishment by Fyodor Dostoevsky"
  },
  {
    title: "Curious Incident of the Dog in the Night-Time - Mark Haddon",
    imageUrl: curiousIncidentImg,
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
    id: 3,
    title: "Circl Future Leaders Programme",
    description: "In 2025, I was selected for the competitive Circl Future Leaders Programme in partnership with So Energy. The programme provided experience in a corporate environment through working with So Energy employees and developing my leadership skills.\n\nAs part of the programme, I completed coaching training and received a certificate accredited by the Association for Coaching.",
    imageUrl: "",
    tags: ["Leadership", "Corporate Experience", "Coaching", "Professional Development"]
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

const BookCarousel = memo(({ books }) => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  return (
    <div className="book-carousel-container">
      <div className="book-carousel">
        {books.map((book, index) => (
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

  return (
    <>
      <nav className="nav-menu">
        <div className="nav-container">
          <div className="nav-links">
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
        </div>
      </nav>

      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <span aria-hidden="true">↑</span>
      </button>

      <div className="intro-section">
        <div className="intro-text">
          <p className="intro-eyebrow">Computer science + AI student</p>
          <h1 className="dynamic-text">I build practical software with AI.</h1>
          <p className="intro-subtitle">
            Hey, I’m Ben. I’m interested in thoughtful products, accessible technology,
            and the systems that make them work.
          </p>
          <button className="intro-action" onClick={() => scrollToSection('work')}>
            View selected work
          </button>
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
            <div className="work-grid">
              {WORK_ITEMS.map((work) => (
                <article className="work-item-card" key={work.id}>
                  <div className="work-item-content">
                    <p className="work-item-number">0{work.id}</p>
                    <h3>{work.title}</h3>
                    <div className="work-item-description">
                      {work.description.split('\n\n').map((paragraph, paraIndex) => (
                        <p key={paraIndex}>{paragraph}</p>
                      ))}
                    </div>
                    {work.tags?.length > 0 && (
                      <div className="work-item-tags">
                        {work.tags.map((tag, index) => (
                          <span key={index} className="work-item-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="subsection qualifications-section">
              <div className="qualification-heading">
                <div>
                  <p className="section-kicker">01 / Education</p>
                  <h3>Qualifications</h3>
                </div>
                <span className="qualification-status">Currently studying</span>
              </div>
              <div className="qualification-item">
                <div className="qualification-main-info">
                  <h4>BSc Computer Science and Artificial Intelligence</h4>
                  <p className="university-name">University of Sussex</p>
                  <div className="qualification-focus">
                    <span>Computer Science</span>
                    <span>Artificial Intelligence</span>
                  </div>
                </div>
                <div className="qualification-side-details">
                  <p className="graduation-date"><span>Expected graduation</span>Jun. 2027</p>
                  <p className="honours-status"><strong>First-Class Honours</strong><span>On track</span></p>
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
                <a href={CONTACT_LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={`mailto:${CONTACT_LINKS.email}`}>Email</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
