import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import InfoFeed from './InfoFeed';
import { ReactComponent as NextArrowButton } from '../../../assets/icon-next_arrow.svg';
import { ReactComponent as PrevArrowButton } from '../../../assets/icon-prev_arrow.svg';
import useCarousel from '../../../hooks/useCarousel';

const CarouselSlide = () => {
  const [images, setImages] = useState([
    {
      image: 'slide_image-1.jpeg',
      info: {
        headLine: '개발자가 되고 싶은 분들?!',
        description: '프론트엔드 무료 교육과정 참여하기',
      },
    },
    {
      image: 'slide_image-2.jpeg',
      info: {
        headLine: '스톱옵션 약 3천만원 제공',
        description: '개발자 연봉 30% 이상 인상 기회!',
      },
    },
    {
      image: 'slide_image-3.jpeg',
      info: {
        headLine: '채팅 상담의 국룰 - 채널톡',
        description: '개발, 비즈니스 외 전 직군 채용',
      },
    },
    {
      image: 'slide_image-4.jpeg',
      info: {
        headLine: '메타쇼핑 플랫폼, 위메프',
        description: '개발직군 적극 채용 중!',
      },
    },
    {
      image: 'slide_image-5.jpeg',
      info: {
        headLine: '골드만 삭스가 주주라고?!',
        description: '잘 봐 핀테크 1등 싸움이다.',
      },
    },
  ]);
  const {
    width,
    currentSlide,
    duration,
    isMoving,
    setWidth,
    setIsMoving,
    move,
  } = useCarousel();
  const target = useRef(null);

  const handleContentLoad = () => {
    // const slideWidth
    // if (width !== currentSlideWidth) setWidth(currentSlideWidth);
    // move(1);
  };

  const handleClick = ({ target: { id } }) => {
    if (isMoving) return;

    const delta = id === 'prev' ? -1 : 1;
    const newSlide = currentSlide + 1 * delta;

    move(newSlide, 500);
  };

  const handleTransitionEnd = () => {
    setIsMoving(false);

    const firstCloneSlide = 0;
    const LastCloneSlide = images.length + 1;

    const delta =
      currentSlide === firstCloneSlide
        ? 1
        : currentSlide === LastCloneSlide
        ? -1
        : 0;

    if (delta) {
      const deltaValue = images.length * delta;
      move(currentSlide + deltaValue);
    }
  };

  useLayoutEffect(() => {
    console.log(target.current.offsetWidth);
  }, []);

  const roopImages = [images[images.length - 1], ...images, images[0]];
  return (
    <>
      <SlideList width={width}>
        <SlideTrack
          currentSlide={currentSlide}
          duration={duration}
          onTransitionEnd={handleTransitionEnd}
        >
          {roopImages.map((feedInfo, index) => {
            return (
              <Slide ref={target} key={index}>
                <Inner>
                  <InfoFeed feedInfo={feedInfo} />
                </Inner>
              </Slide>
            );
          })}
        </SlideTrack>
      </SlideList>
      <Button onClick={handleClick} id="next">
        <span>
          <NextArrowButton />
        </span>
      </Button>
      <Button onClick={handleClick} id="prev">
        <span>
          <PrevArrowButton />
        </span>
      </Button>
    </>
  );
};

const SlideList = styled.div`
  /* width: ${({ width }) => width}px; */
  width: 1200px;
  position: relative;
  margin: 0;
  overflow: hidden;
  padding: 0 50px;
`;

const SlideTrack = styled.div`
  display: flex;

  transition: transform ${({ duration }) => duration}ms ease-out;
`;

const Slide = styled.div`
  position: relative;
  height: 100%;
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

  &#next {
    right: calc((100% - 1200px) / 2);
  }

  &#prev {
    left: calc((100% - 1210px) / 2);
  }
`;
export default CarouselSlide;
