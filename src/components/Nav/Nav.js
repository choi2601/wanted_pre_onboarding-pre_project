import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const menuList = [
  { name: '채용', path: 'jobsfeed' },
  { name: '이벤트', path: 'events' },
  { name: '직군별연봉', path: 'salary' },
  { name: '이력서', path: 'resume' },
  { name: '커뮤니티', path: 'community' },
  { name: '프리랜서', path: 'experts' },
  { name: 'AI 합격예측', path: 'aiscore/resume' },
];

const Nav = () => {
  return (
    <Container>
      <Header>
        <Inner>
          <LogoContainer>
            <HamburgerButton>
              <img alt="hamburgerButton" src="/images/icon-menu.png" />
            </HamburgerButton>
            <Logo to="/">
              <i className="icon-logo_new" />
            </Logo>
          </LogoContainer>
          <MenuContainer>
            {menuList.map(({ name, path }, index) => {
              return (
                <MenuList key={index}>
                  <MenuLink to={`/${path}`}>{name}</MenuLink>
                </MenuList>
              );
            })}
          </MenuContainer>
          <AsideContainer>
            <AsideList>
              <button className="searchButton">
                <img alt="searchButton" />
              </button>
            </AsideList>
            <AsideList>
              <button className="noticeButton">
                <img alt="noticeButton" />
              </button>
            </AsideList>
            <AsideList>
              <UserFigure />
            </AsideList>
          </AsideContainer>
        </Inner>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgba(0 0 0 / 10%);
  z-index: 100;
`;

const Header = styled.header`
  max-width: 1060px;
  margin: 0 auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
`;

const HamburgerButton = styled(Button)`
  margin-top: -2px;
  margin-right: 15px;

  & img {
    width: 17px;
    height: 14px;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #333333;

  & .icon-logo {
    font-size: 17px;
  }
`;

const MenuContainer = styled.ul`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

const MenuList = styled.li`
  padding: 15px;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #333333;
`;

const AsideContainer = styled.ul`
  display: flex;
  width: 251px;
`;

const AsideList = styled.li``;

const UserFigure = styled.figure``;

export default Nav;
