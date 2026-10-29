import { motion } from 'framer-motion'
import { FOCUS_POINTS } from '../data/focusPoints'

interface ResumeEntry {
  period: string
  place: string
  role: string
  points: string[]
  project: string
  projectMeta: string
}

const ENTRIES: ResumeEntry[] = [
  { period: '2023 - 2028', place: 'South China University of Technology', role: 'B.Eng. Software Engineering · GPA 3.63 / 4.00', points: ['Average score: 85.92', 'Data Structures · Operating Systems · Advanced C++ · Computer Networks'], project: 'Streaming Co-Dance Generation', projectMeta: 'Causal music + leader-conditioned follower motion · CVPR 2027 under review' },
  { period: '2025', place: 'Technical University of Munich', role: 'Summer Exchange · Supercomputing & Embodied Intelligence', points: ['Studied supercomputing technologies and their industrial applications', 'Focused on embodied intelligence in complex environments'], project: 'Embodied Intelligence Study', projectMeta: 'Supercomputing technologies and industrial applications in complex environments' },
  { period: '2026 - Present', place: 'Westlake University · Endless Lab', role: 'Visiting Student · FitGen', points: ['Music-conditioned structured digital-human workout choreography generation', 'Human mesh recovery, 3D alignment, identity matching and motion reconstruction'], project: 'FitGen', projectMeta: 'Structured digital-human workout choreography generation · HMR · 3D motion reconstruction' },
]

const EASE = [0.22, 1, 0.36, 1] as const

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const title = lang === 'zh' ? '教育经历' : 'Education'
  return (
    <section className="resume" lang={lang}>
      <motion.h2 className="resume-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}>
        {title}
      </motion.h2>
      <div className="timeline">
        {ENTRIES.map((entry, index) => (
          <motion.div key={entry.place} className="tl-entry" data-point={FOCUS_POINTS[index]} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-12% 0px -12% 0px' }}>
            <motion.span className="tl-dot" aria-hidden="true" />
            <div className="tl-body">
              <motion.div className="tl-period">{entry.period}</motion.div>
              <motion.div className="tl-head"><h3 className="tl-place">{entry.place}</h3></motion.div>
              <motion.div className="tl-role">{entry.role}</motion.div>
              <motion.ul className="tl-points">
                {entry.points.map((point) => <li key={point}>{point}</li>)}
              </motion.ul>
              <motion.div className="tl-project-sticker">
                <span className="tl-project-icon" aria-hidden="true">✦</span>
                <span><b>{entry.project}</b><small>{entry.projectMeta}</small></span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
