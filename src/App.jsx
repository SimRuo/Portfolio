import Hero from './components/Hero.jsx'
import NavBar from './components/NavBar.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
