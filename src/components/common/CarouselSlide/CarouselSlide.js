import React from 'react';
import styled from 'styled-components';
import InfoFeed from './InfoFeed';

const CarouselSlide = () => {
  return (
    <SlickList>
      <SlickTrack>
        <SlickSlide>
          <Inner>
            <InfoFeed />
          </Inner>
        </SlickSlide>
      </SlickTrack>
    </SlickList>
  );
};

const SlickList = styled.div``;

const SlickTrack = styled.div``;

const SlickSlide = styled.div``;

const Inner = styled.div``;

export default CarouselSlide;
