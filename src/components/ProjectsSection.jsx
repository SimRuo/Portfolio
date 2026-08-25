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
        sx={{
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
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
