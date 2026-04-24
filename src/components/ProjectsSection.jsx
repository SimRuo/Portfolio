import { useTranslation } from 'react-i18next'

import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import projects from '../content/projects.js'

export default function ProjectsSection() {
  const { t } = useTranslation()

  const mainProjects = projects.filter((p) => p.variant !== 'bonus')
  const bonusProjects = projects.filter((p) => p.variant === 'bonus')

  return (
    <Section id="projects" title={t('projects.title')} subtitle={t('projects.subtitle')}>
      <div className="row g-4">
        {mainProjects.map((project) => (
          <div key={project.id} className="col-12 col-md-6 col-lg-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {bonusProjects.length > 0 && (
        <div className="row g-4 mt-1">
          {bonusProjects.map((project) => (
            <div
              key={project.id}
              className="col-12 col-md-6 col-lg-4 offset-lg-4"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}
