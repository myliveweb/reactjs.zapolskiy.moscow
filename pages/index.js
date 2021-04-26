import Link from 'next/link'
import MainLayout from '../layouts/MainLayout'

export default function Index() {
  return (
    <MainLayout title="Фрилансер - Разработка сайтов">
      <h1>Hello Next.JS!</h1>
      <p><Link href="/about"><a>about</a></Link></p>
      <p><Link href="/posts"><a>posts</a></Link></p>
      <img src="/assets/images/y.jpg" />
    </MainLayout>
  )
}
