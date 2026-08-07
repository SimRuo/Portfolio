import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'

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
      <Box
        className="hatch-bg"
        sx={{
          display: 'grid',
          gap: '1px',
          border: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.default',
          gridTemplateColumns: {
            xs: 'repeat(auto-fill, minmax(260px, 1fr))',
            sm: 'repeat(auto-fill, minmax(320px, 1fr))',
          },
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i + 1}
            onOpen={() => setActiveId(project.id)}
          />
        ))}
      </Box>

      <ProjectModal project={active} open={Boolean(active)} onClose={() => setActiveId(null)} />
    </Section>
  )
}
