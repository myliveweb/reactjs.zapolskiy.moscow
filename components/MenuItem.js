import styled from 'styled-components';
import Link from 'next/link'

const Li = styled.li`
    float: left;
    position: relative;
    display: block;
`;

const ALi = styled.a`
    font-size: 12px;
    letter-spacing: 3px;
    color: #222;
    padding-top: 15px;
    padding-bottom: 15px;
    line-height: 20px;
    position: relative;
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    cursor: pointer;
`;

export default function MenuItem({item}) {
  return (
    <li>
      <Link href={item.link} style={{fontSize: '12px'}}>{item.name}</Link>
    </li>
  )
}