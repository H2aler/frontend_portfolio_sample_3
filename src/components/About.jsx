import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { label: 'YEARS', value: '3+', color: 'var(--primary)' },
    { label: 'PROJECTS', value: '20+', color: 'var(--secondary)' },
    { label: 'TECH', value: '10+', color: 'var(--accent)' },
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="about-content"
        >
          <div className="about-text">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              ABOUT
            </motion.h2>
            <div className="about-description">
              <p>
                React와 TypeScript를 주로 사용하는 프론트엔드 개발자입니다.
                사용자 경험을 중시하며, 깔끔한 코드와 직관적인 인터페이스를 만드는 것을 좋아합니다.
              </p>
              <p>
                새로운 기술을 배우는 것을 즐기며, 코드 리뷰와 리팩토링을 통해
                지속적으로 개선해 나가고 있습니다.
              </p>
            </div>
            <div className="tech-stack">
              <h3>TECH STACK</h3>
              <div className="tech-list">
                <span className="tech-item">React</span>
                <span className="tech-item">TypeScript</span>
                <span className="tech-item">Next.js</span>
                <span className="tech-item">Tailwind</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Git</span>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                style={{ '--stat-color': stat.color }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
