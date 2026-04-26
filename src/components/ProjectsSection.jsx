import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import projects from '../content/projects.js'

export default function ProjectsSection() {
  const { t } = useTranslation()
  const [activeId, setActiveId] = useState(null)
  const active = projects.find((p) => p.id === activeId) ?? null

  return (
    <Section id="projects" title={t('projects.title')} subtitle={t('projects.subtitle')}>
      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-12 col-md-6 col-lg-4">
            <ProjectCard project={project} onOpen={() => setActiveId(project.id)} />
          </div>
        ))}
      </div>

      <ProjectModal project={active} open={Boolean(active)} onClose={() => setActiveId(null)} />
    </Section>
  )
}
