import Link from 'next/link'

export default function MenuItem({item}) {
  return (
    <li>
      {item.topLink
        ? <a href={item.link} style={{fontSize: '12px'}}>{item.name}</a>
        : <Link href={item.link} style={{fontSize: '12px'}}>{item.name}</Link>
      }
    </li>
  )
}