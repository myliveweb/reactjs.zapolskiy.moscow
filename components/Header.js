import styled from 'styled-components';

import TopMenu from './Menu';

const StyledHeader = styled.header`
    border-bottom: 1px solid #f5f5f5;
    position: relative;
    width: 100%;
    z-index: 998;
`;

const Nav = styled.nav`
    background: #fff;
    padding: 0;
    border: 0;
    border-radius: 0;
    margin: 0;
    text-transform: uppercase;
    font-family: Raleway400, sans-serif;
    position: relative;
    min-height: 50px;
`;

const Container = styled.div`
    width: 1170px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

const NavBarHeader = styled.div`
    margin-right: 0;
    margin-left: 0;
    float: left;
`;

const NavbarBrand = styled.a`
    font-family: Raleway400, sans-serif;
    margin-left: -15px;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 3px;
    color: #222;
    float: left;
    height: 50px;
    padding: 15px 15px;
    line-height: 20px;
    text-decoration: none;
`;

const NavbarCallapse = styled.div`
    margin-right: 0;
    margin-left: 0;
    display: block!important;
    height: auto!important;
    padding-bottom: 0;
    overflow: visible!important;
    visibility: visible!important;
    width: auto;
    border-top: 0;
    padding-right: 15px;
    padding-left: 15px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Nav role="navigation">
        <Container>
          <NavBarHeader>
            <NavbarBrand href="/">Сергей Запольский</NavbarBrand>
          </NavBarHeader>
          <NavbarCallapse id="custom-collapse">
            <TopMenu />
          </NavbarCallapse>
        </Container>
      </Nav>
    </StyledHeader>
  )
}