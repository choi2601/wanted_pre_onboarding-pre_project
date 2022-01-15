import React from 'react';
import styled from 'styled-components';
import CarouselSlide from '../../components/common/CarouselSlide/CarouselSlide';
import { ReactComponent as NextArrowButton } from '../../assets/icon-next_arrow.svg';
import { ReactComponent as PrevArrowButton } from '../../assets/icon-prev_arrow.svg';

const MainPage = () => {
  return (
    <Container>
      <TopBanner>
        <CarouselSlide />
        <Button className="nextArrowButton">
          <span>
            <NextArrowButton />
          </span>
        </Button>
        <Button className="prevArrowButton">
          <span>
            <PrevArrowButton />
          </span>
        </Button>
      </TopBanner>
    </Container>
  );
};

const Container = styled.section`
  background-color: #fff;
  overflow-x: hidden;

  @media (min-width: 1200px) {
    padding-top: 25px;
  }
`;

const TopBanner = styled.div`
  position: relative;
  overflow: hidden;

  @media (min-width: 1200px) {
    height: auto;
  }
`;

const Button = styled.button`
  ${({ theme }) => theme.flexMinin()};
  position: absolute;
  top: 120px;
  width: 30px;
  height: 60px;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  cursor: pointer;

  &.nextArrowButton {
    right: calc((100% - 1200px) / 2);
  }

  &.prevArrowButton {
    left: calc((100% - 1210px) / 2);
  }
`;

export default MainPage;
