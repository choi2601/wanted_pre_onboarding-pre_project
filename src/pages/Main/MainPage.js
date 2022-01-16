import React from 'react';
import styled from 'styled-components';
import CarouselSlide from '../../components/common/CarouselSlide/CarouselSlide';

import useCarousel from '../../hooks/useCarousel';

const MainPage = () => {
  return (
    <Container>
      <TopBanner>
        <CarouselSlide />
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

export default MainPage;
