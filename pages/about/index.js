import Link from 'next/link'
import MainLayout from '../../layouts/MainLayout'

export default function About() {
  return (
    <MainLayout title="About Title">
    <h1>About page</h1>
    <p><Link href="/"><a>home</a></Link></p>
    <p><Link href="/posts"><a>posts</a></Link></p>    
    </MainLayout>
  )
}
