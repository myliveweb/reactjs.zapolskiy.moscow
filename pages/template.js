import MainLayout from '../layouts/MainLayout'
import Header from '../components/Header'
import Contact from '../components/Contact'

export default function Template() {
  return (
    <MainLayout title="Шаблоны">
      <Header />
      <h1>Шаблоны</h1>
      <Contact />
    </MainLayout>
  )
}