import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { ReactComponent as NoticeIcon } from '../../assets/icon-notice.svg';

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
              <Button className="searchButton">
                <SearchIcon />
              </Button>
            </AsideList>
            <AsideList>
              <Button className="noticeButton">
                <NoticeIcon />
              </Button>
            </AsideList>
            <AsideList>
              <ProfileButton>
                <UserFigure>
                  <div className="userFigure" />
                </UserFigure>
              </ProfileButton>
            </AsideList>
            <AsideList className="leftDivision">
              <DashBoardButton to="/dashboard">기업 서비스</DashBoardButton>
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
  ${({ theme }) => theme.flexMinin('row', 'space-between')}
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
  ${({ theme }) =>
    css`
      ${theme.linkReset}
    `};

  & .icon-logo {
    font-size: 17px;
  }
`;

const MenuContainer = styled.ul`
  display: flex;
  line-height: 20px;
  ${({ theme }) => theme.navFont};
`;

const MenuList = styled.li`
  padding: 15px;
`;

const MenuLink = styled(Link)`
  ${({ theme }) => theme.linkReset};
`;

const AsideContainer = styled.ul`
  display: flex;
`;

const AsideList = styled.li`
  &.leftDivision {
    display: inline-flex;
  }

  &.leftDivision::before {
    display: block;
    content: '';
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }

  & .searchButton {
    margin-top: 5px;
    padding: 0 10px;
  }
  & .noticeButton {
    position: relative;
    margin-right: 10px;
    margin-top: 5px;
    padding: 0 10px;
  }
`;

const ProfileButton = styled(Button)`
  height: 32px;
  vertical-align: center;
  margin-right: 11px;
  padding: 0;
  ${({ theme }) => theme.flexMinin('row', 'space-between')}
`;

const UserFigure = styled.figure`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  overflow: hidden;
  ${({ theme }) => theme.flexMinin()};

  & .userFigure {
    background-image: url('https://static.wanted.co.kr/images/avatars/918846/ee27cddc.jpg');
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const DashBoardButton = styled(Link)`
  ${({ theme }) => theme.linkReset};
  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin-left: 15px;
  font-weight: 400;
`;

export default Nav;
