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

const SlickList = styled.div`
  position: relative;
  display: block;
  margin: 0;
  padding: 0 50px;
  overflow: hidden;
`;

const SlickTrack = styled.div`
  opacity: 1;
  /* transform: translate3d(0px, 0px, 0px); */
  position: relative;

  &::before {
    content: '';
    display: table;
  }
`;

const SlickSlide = styled.div`
  position: relative;
  float: left;
  height: 100%;
  min-height: 1px;

  @media (min-width: 1200px) {
    padding: 0 12px;
    box-sizing: content-box;
  }
`;

const Inner = styled.div`
  margin: 20px 10px;

  @media (min-width: 1200px) {
    margin: 0;
  }
`;

export default CarouselSlide;
