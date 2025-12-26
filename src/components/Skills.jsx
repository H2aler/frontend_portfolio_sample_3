import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiFigma,
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: 'FRONTEND',
      color: 'var(--primary)',
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
      ],
    },
    {
      title: 'BACKEND',
      color: 'var(--secondary)',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Python', icon: SiPython },
      ],
    },
    {
      title: 'DATABASE',
      color: 'var(--accent)',
      skills: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
      ],
    },
    {
      title: 'TOOLS',
      color: 'var(--cyan)',
      skills: [
        { name: 'AWS', icon: SiAmazonaws },
        { name: 'Docker', icon: SiDocker },
        { name: 'Git', icon: SiGit },
        { name: 'Figma', icon: SiFigma },
      ],
    },
  ]

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="skills-header"
        >
          <h2 className="section-title">SKILLS</h2>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              style={{ '--category-color': category.color }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="skill-icon">
                      <skill.icon />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
