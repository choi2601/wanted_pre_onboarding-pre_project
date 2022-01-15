import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { ReactComponent as NoticeIcon } from '../../assets/icon-notice.svg';
import { ReactComponent as NewIcon } from '../../assets/icon-new.svg';
import { ReactComponent as BetaIcon } from '../../assets/icon-beta.svg';
import { ReactComponent as NewBadgeIcon } from '../../assets/icon-new_badge.svg';
import { ReactComponent as MenuBtnIcon } from '../../assets/icon-menu_button.svg';

const menuList = [
  { name: '홈', path: '' },
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
    <>
      <Container>
        <Header>
          <Inner>
            <LeftContainer>
              <LogoContainer>
                <HamburgerButton>
                  <img alt="hamburgerButton" src="/images/icon-menu.png" />
                </HamburgerButton>
                <Logo to="/">
                  <i className="icon-logo_new" />
                </Logo>
              </LogoContainer>
            </LeftContainer>
            <MenuContainer>
              {menuList.map(({ name, path }, index) => {
                return (
                  <MenuList
                    className={
                      (name === '홈' && 'home selectNav') ||
                      (name === '채용' && 'jobsFeed') ||
                      (name === '이벤트' && 'events')
                    }
                    key={index}
                  >
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
                <Button className="searchButton defaultButton">
                  <SearchIcon />
                </Button>
              </AsideList>
              <AsideList>
                <Button className="noticeButton defaultButton">
                  <NoticeIcon />
                </Button>
                <NewIconBadge>
                  <NewBadgeIcon />
                </NewIconBadge>
              </AsideList>
              <AsideList className="profile">
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
              <AsideList className="menu">
                <Button className="menuButton">
                  <MenuBtnIcon />
                </Button>
              </AsideList>
            </AsideContainer>
          </Inner>
        </Header>
      </Container>
      <Padding />
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgba(0 0 0 / 10%);
  z-index: 100;
  font-family: sans-serif;
`;

const Header = styled.header`
  position: relative;
  max-width: 1060px;
  margin: 0 auto;
  height: 50px;

  @media (max-width: 767px) {
    height: 110px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 110px;
    margin: 0 auto;
    width: 90%;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 90%;
  }

  @media (min-width: 1200px) {
    width: 87.72%;
  }
`;

const Inner = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'space-between')}
  flex-wrap: wrap;
`;

const LeftContainer = styled.div`
  ${({ theme }) => theme.flexMinin('row', 'space-between')}

  @media (max-width: 767px) {
    width: 100%;
    height: 60px;
    padding: 15px 20px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    height: 60px;
    padding: 15px 0;
  }
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

  @media (min-width: 768px) and (max-width: 991px) {
    position: relative;
    float: left;
  }

  & .icon-logo {
    font-size: 17px;
  }
`;

const MenuContainer = styled.ul`
  display: flex;
  line-height: 20px;
  ${({ theme }) => theme.navFont};

  @media (max-width: 767px) {
    text-align: left;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    justify-content: flex-start;
    margin-right: 30px;
  }

  @media (min-width: 992px) and (max-width: 1100px) {
    display: flex;
    flex: 1 1;
    justify-content: space-evenly;
  }
`;

const MenuList = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: center;
  font-weight: 600;

  &.home {
    @media (min-width: 768px) and (max-width: 991px) {
      display: none;
    }

    @media (min-width: 992px) and (max-width: 1100px) {
      display: none;
    }

    @media (min-width: 1100px) {
      display: none;
    }
  }

  &.selectNav {
    box-shadow: inset 0 -2px #258bf7;
  }

  &:not(.home):not(.jobsFeed):not(.events) {
    @media (max-width: 767px) {
      display: none;
    }
  }
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

    @media (min-width: 992px) and (max-width: 1100px) {
      right: -20px;
    }
  }

  @media (min-width: 992px) and (max-width: 1100px) {
    font-size: 13px;
    padding: 15px 0;
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

  &.profile {
    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      display: none;
    }
  }

  &.leftDivision {
    display: inline-flex;

    @media (max-width: 767px) {
      display: none;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      display: none;
    }
  }

  &.leftDivision::before {
    display: block;
    content: '';
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }

  &.menu {
    position: relative;
    display: inline-block;
    height: 100%;
    vertical-align: center;

    @media (min-width: 992px) and (max-width: 1199px) {
      display: none !important;
    }

    @media (min-width: 1200px) {
      display: none !important;
    }
  }

  & .searchButton {
    margin-top: 5px;

    @media (max-width: 767px) {
      margin: 0;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      margin: 0;
    }

    @media (min-width: 1200px) {
      padding: 0 10px;
    }
  }

  & .noticeButton {
    position: relative;
    margin-right: 10px;
    margin-top: 5px;
    padding: 0 10px;

    @media (max-width: 767px) {
      margin: 0;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      margin: 0;
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      margin-right: 0;
    }
  }

  & .menuButton {
    margin-right: 10px;
    padding-left: 10px;

    @media (min-width: 768px) and (max-width: 991px) {
      margin-right: 0;
    }
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

  @media (min-width: 992px) and (max-width: 1199px) {
    margin-right: 0;
  }

  @media (min-width: 1200px) {
    padding: none;
  }
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
  color: #666666;
  font-size: 13px;
  font-weight: 400;

  @media (min-width: 992px) and (max-width: 1199px) {
    margin: none;
  }

  @media (min-width: 1200px) {
    padding: none;
  }
`;

const Padding = styled.div`
  height: 50px;

  @media (min-width: 768px) and (max-width: 991px) {
    height: 110px;
  }

  @media (max-width: 767px) {
    height: 110px;
  }
`;

export default Nav;
