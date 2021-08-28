import { useRouter } from 'next/router'

export default function MenuItem({item}) {
  const router = useRouter()
  return (
    <li>
      {item.topLink
        ? <a href={item.link} style={{fontSize: '12px'}}>{item.name}</a>
        : <a href={item.link} style={{fontSize: '12px'}}>{item.name}</a>
      }
    </li>
  )
}