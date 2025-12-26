import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub', color: 'var(--primary)' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'var(--secondary)' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'var(--cyan)' },
    { icon: FaEnvelope, href: '#contact', label: 'Email', color: 'var(--accent)' },
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <span className="badge-text">FRONTEND</span>
            <span className="badge-dot"></span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">DEVELOPER</span>
            <span className="title-line accent">PORTFOLIO</span>
          </h1>

          <p className="hero-description">
            Building digital experiences with code, creativity, and a touch of chaos.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              VIEW WORK
            </a>
            <a href="#contact" className="btn-secondary">
              CONTACT
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="visual-box box-1">
            <div className="box-content">
              <span className="box-number">01</span>
              <span className="box-label">PROJECTS</span>
            </div>
          </div>
          <div className="visual-box box-2">
            <div className="box-content">
              <span className="box-number">10+</span>
              <span className="box-label">TECH STACK</span>
            </div>
          </div>
          <div className="visual-box box-3">
            <div className="box-content">
              <span className="box-number">3+</span>
              <span className="box-label">YEARS</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-social">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="social-link"
            style={{ '--link-color': link.color }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <link.icon />
          </motion.a>
        ))}
      </div>

      <div className="hero-decoration">
        <div className="decoration-line line-1"></div>
        <div className="decoration-line line-2"></div>
        <div className="decoration-line line-3"></div>
      </div>
    </section>
  )
}

export default Hero
