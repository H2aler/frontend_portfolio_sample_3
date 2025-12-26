import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('메시지가 전송되었습니다!')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub', color: 'var(--primary)' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'var(--secondary)' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'var(--cyan)' },
    { icon: FaEnvelope, href: 'mailto:contact@example.com', label: 'Email', color: 'var(--accent)' },
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="contact-header"
        >
          <h2 className="section-title">CONTACT</h2>
        </motion.div>

        <div className="contact-content">
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="YOUR NAME"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="YOUR.EMAIL@EXAMPLE.COM"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="HELLO, I'D LIKE TO TALK ABOUT..."
              />
            </div>
            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </motion.form>

          <motion.div
            className="contact-social"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="social-divider">
              <span>OR REACH OUT VIA</span>
            </div>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="social-link"
                  style={{ '--link-color': link.color }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <link.icon />
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
