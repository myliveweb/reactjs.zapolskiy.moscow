import styled from 'styled-components';

import MenuItem from './MenuItem';

const Ul = styled.ul`
    float: right;
    margin-right: -15px;
    margin-top: 7px;
    padding-left: 0;
    list-style: none;
`;

const topMenu = [
  {id: 0, name: 'Начало', link: '#home'},
  {id: 1, name: 'Услуги', link: '#services'},
  {id: 2, name: 'Работы', link: '#portfolio'},
  {id: 3, name: 'Навыки', link: '#skills'},
  {id: 4, name: 'Сертификаты', link: '#testimonials'},
  {id: 5, name: 'Шаблоны', link: '/template/'},
  {id: 6, name: 'Контакты', link: '#contact'},
]

export default function TopMenu() {
  return (
    <Ul>
      {topMenu.map((item) => <MenuItem key={item.id} item={item} />)}
    </Ul>
  )
}