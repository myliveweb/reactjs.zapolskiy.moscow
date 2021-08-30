import MainLayout from '../layouts/MainLayout'
import FirstScreen from '../components/FirstScreen'
import Header from '../components/Header'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Calltoaction from '../components/Calltoaction'
import Contact from '../components/Contact'

export default function Index() {
  return (
    <MainLayout title="Фрилансер - Разработка сайтов">
      <FirstScreen />
      <Header />
      <Services />
      <Portfolio />
      <Skills />
      <Calltoaction />
      <Contact />
    </MainLayout>
  )
}
