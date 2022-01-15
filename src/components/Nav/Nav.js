import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { ReactComponent as NoticeIcon } from '../../assets/icon-notice.svg';
import { ReactComponent as NewIcon } from '../../assets/icon-new.svg';
import { ReactComponent as BetaIcon } from '../../assets/icon-beta.svg';
import { ReactComponent as NewBadgeIcon } from '../../assets/icon-new_badge.svg';

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
                  <MenuLink to={`/${path}`}>
                    {name}
                    <em>
                      {(name === '커뮤니티' && <NewIcon />) ||
                        (name === 'AI 합격예측' && <BetaIcon />)}
                    </em>
                  </MenuLink>
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
              <NewIconBadge className="search">
                <NewBadgeIcon />
              </NewIconBadge>
            </AsideList>
            <AsideList>
              <ProfileButton>
                <UserFigure>
                  <div className="userFigure" />
                </UserFigure>
              </ProfileButton>
              <NewIconBadge className="user">
                <NewBadgeIcon />
              </NewIconBadge>
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
  ${({ theme }) => theme.linkReset};

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
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: center;
`;

const MenuLink = styled(Link)`
  ${({ theme }) => theme.linkReset};

  position: relative;
  display: inline-block;
  vertical-align: middle;
  line-height: 20px;
  padding: 15px;

  & em {
    position: absolute;
    top: 10px;
    right: -5px;
    pointer-events: none;
    font-style: normal;
  }
`;

const AsideContainer = styled.ul`
  display: flex;

  @media (min-width: 1200px) {
    padding: 0 10px;
  }
`;

const AsideList = styled.li`
  position: relative;
  line-height: 1.42857143;

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

const NewIconBadge = styled.span`
  position: absolute;
  top: -4px;
  left: 24px;

  &.user {
    left: 22px;
  }

  padding: 0 !important;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 13px;
  height: 13px;
  background-color: rgb(51, 102, 255);
  border-radius: 5px;
`;

const ProfileButton = styled(Button)`
  height: 32px;
  vertical-align: top;
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
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin-left: 15px;
  color: #666;
  font-size: 13px;
  font-weight: 400;
`;

export default Nav;
