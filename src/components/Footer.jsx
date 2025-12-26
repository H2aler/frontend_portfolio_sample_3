import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: '#contact', label: 'Email' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">DEV</h3>
            <p className="footer-description">
              Frontend Developer Portfolio
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">LINKS</h4>
            <ul className="footer-links">
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">CONNECT</h4>
            <div className="footer-social">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-social-link"
                  aria-label={link.label}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} PORTFOLIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
