import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About This Blog</h1>
        <p>Get to know the person behind the words</p>
      </div>

      <div className="about-content">
        <div className="profile-section">
          <div className="profile-image">
            <div className="image-container">
              <img src="/images/nishok-pic.jpg" alt="Nishok" className="profile-photo" />
              <div className="image-overlay">
                <span>Nishok Ganapathy</span>
              </div>
            </div>
          </div>
          <div className="profile-info">
            <h2>Hi, I'm Nishok</h2>
            <p className="tagline">Blogger, Developer, & Creative Thinker</p>
            <p>
              Welcome to my blog! I created this space to share my thoughts, experiences, 
              and insights about technology, aviation, and psycology. What started as a personal passion 
              project has grown into a platform where I connect with readers like you who have insane passion about aviation like me.
            </p>
            <p>
              When I'm not writing, you can find me coding, exploring new technologies, or watching planes. I believe in 
              continuous learning and try to bring these principles into everything I create.
            </p>
            
            <div className="personal-details">
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Based in Navi mumbai, India</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-heart"></i>
                <span>Passionate about Aviation and design</span>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-story">
          <h2>Why This Blog Exists</h2>
          <p>
            I started this blog in 2023 because I wanted to create a space where 
            I could share my perspective on web development and technology. My goal is to 
            educate and inspire readers while building a community of like-minded individuals.
          </p>
          <p>
            Through this blog, I explore topics like React development, UI/UX design, 
            and share my journey of learning new technologies. I believe that 
            sharing knowledge helps everyone grow together.
          </p>
        </div>

        <div className="connect-section">
          <h2>Let's Connect</h2>
          <p>
            I love hearing from readers! Feel free to reach out with questions, 
            suggestions, or just to say hello.
          </p>
          {/* <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;