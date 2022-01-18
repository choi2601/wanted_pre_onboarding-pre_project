import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import InfoFeed from './InfoFeed';
import { ReactComponent as NextArrowButton } from '../../../assets/icon-next_arrow.svg';
import { ReactComponent as PrevArrowButton } from '../../../assets/icon-prev_arrow.svg';
import { getTarget } from '../../../module/getTarget';

const CarouselSlide = () => {
  const [images, setImages] = useState([
    {
      image: 'slide_image-1.jpeg',
      info: {
        headLine: '채팅 상담의 국룰 - 채널톡',
        description: '개발, 비즈니스 외 전 직군 채용',
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
        headLine: '개발자가 되고 싶은 분들?!',
        description: '프론트엔드 무료 교육과정 참여하기',
      },
    },
    {
      image: 'slide_image-4.jpeg',
      info: {
        headLine: '골드만 삭스가 주주라고?!',
        description: '잘 봐 핀테크 1등 싸움이다.',
      },
    },
    {
      image: 'slide_image-5.jpeg',
      info: {
        headLine: '메타쇼핑 플랫폼, 위메프',
        description: '개발직군 적극 채용 중!',
      },
    },
    {
      image: 'slide_image-6.jpeg',
      info: {
        headLine: '인턴을 Wanted',
        description: '국내 최고의 IT 기업에서 인턴 적극 모집 중!',
      },
    },
    {
      image: 'slide_image-7.jpeg',
      info: {
        headLine: '2천만의 라이프 스타일 플랫폼',
        description: '우리의 일은 업계의 표준이 됩니다',
      },
    },
    {
      image: 'slide_image-8.jpeg',
      info: {
        headLine: '럭셔리 쇼핑을 발란',
        description: '전 직군 채용 중!',
      },
    },
  ]);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  let target = useRef(null);
  let targets = useRef([]);

  const handleContentLoad = ({ target }) => {
    const currentSlideWidth = target.offsetWidth;
    const currentSlideHeight = target.offsetHeight;

    console.log(currentSlideWidth);

    if (width !== currentSlideWidth) setWidth(currentSlideWidth);
    if (height !== currentSlideHeight) setHeight(currentSlideHeight);
  };

  const moveSlide = event => {
    if (isMoving) return;

    if (!event) {
      const prevSlide = targets.current[2];
      const prevSlideImageStyle =
        prevSlide.getElementsByClassName('imageBrightness')[0].style;
      const prevSlideVisibleStyle =
        prevSlide.getElementsByClassName('detailInfo')[0].style;

      prevSlideImageStyle.setProperty('filter', 'brightness(50%)');
      prevSlideVisibleStyle.setProperty('visibility', 'hidden');

      target.current.appendChild(targets.current[0]);
      targets.current = Array.from(target.current.childNodes);
    } else {
      let id;
      if (event.type === 'swipe') {
        id = event.id;
      } else {
        id = getTarget(event.target, 'BUTTON').id;
      }

      if (id === 'prev') {
        const prevSlide = targets.current[2];
        const prevSlideImageStyle =
          prevSlide.getElementsByClassName('imageBrightness')[0].style;
        const prevSlideVisibleStyle =
          prevSlide.getElementsByClassName('detailInfo')[0].style;

        prevSlideImageStyle.setProperty('filter', 'brightness(50%)');
        prevSlideVisibleStyle.setProperty('visibility', 'hidden');

        target.current.insertBefore(
          targets.current[targets.current.length - 1],
          targets.current[0]
        );
        targets.current = Array.from(target.current.childNodes);
      } else if (id === 'next') {
        const prevSlide = targets.current[2];
        const prevSlideImageStyle =
          prevSlide.getElementsByClassName('imageBrightness')[0].style;
        const prevSlideVisibleStyle =
          prevSlide.getElementsByClassName('detailInfo')[0].style;

        prevSlideImageStyle.setProperty('filter', 'brightness(50%)');
        prevSlideVisibleStyle.setProperty('visibility', 'hidden');

        target.current.appendChild(targets.current[0]);
        targets.current = Array.from(target.current.childNodes);
      }
    }
    const currentSlide = targets.current[2];
    const currentSlideImageStyle =
      currentSlide.getElementsByClassName('imageBrightness')[0].style;
    const currentSlideVisibleStyle =
      currentSlide.getElementsByClassName('detailInfo')[0].style;

    currentSlideImageStyle.setProperty('filter', 'brightness(100%)');
    currentSlideVisibleStyle.setProperty('visibility', 'visible');
  };

  const handleTransitionEnd = () => {
    setIsMoving(false);
  };

  // useEffect(() => {
  //   if (!target.current || !targets.current) return;
  //   (() => {
  //     setInterval(moveSlide, 5000);
  //   })();
  // }, []);

  return (
    <>
      <SlideList>
        <SlideTrack
          width={width}
          height={height}
          ref={target}
          onTransitionEnd={handleTransitionEnd}
        >
          {images.map((feedInfo, index) => {
            return (
              <Slide
                ref={el => (targets.current[index] = el)}
                onLoad={handleContentLoad}
                key={index}
              >
                <Inner>
                  <InfoFeed
                    active={index === 2 && 'active'}
                    feedInfo={feedInfo}
                    moveSlide={moveSlide}
                  />
                </Inner>
              </Slide>
            );
          })}
        </SlideTrack>
      </SlideList>
      <Button onClick={moveSlide} id="next">
        <span>
          <NextArrowButton />
        </span>
      </Button>
      <Button onClick={moveSlide} id="prev">
        <span>
          <PrevArrowButton />
        </span>
      </Button>
    </>
  );
};

const SlideList = styled.div`
  margin: 0;
  overflow: hidden;
`;

const SlideTrack = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  position: relative;
  margin: 0 auto;
  user-select: none;
`;

const Slide = styled.div`
  position: absolute;
  transition: 0.5s all ease-out;
  height: 100%;

  &:nth-child(1) {
    z-index: 1;
    transform: translateX(-204%);
  }
  &:nth-child(2) {
    z-index: 2;
    transform: translateX(-102%);
  }
  &:nth-child(3) {
    z-index: 4;
  }
  &:nth-child(4) {
    z-index: 2;
    transform: translateX(102%);
  }
  &:nth-child(n + 5) {
    z-index: 1;
    transform: translateX(204%);
  }

  @media (min-width: 768px) and (max-width: 991px) {
    left: 45px;

    &:nth-child(1) {
      z-index: 1;
      transform: translateX(-200%);
    }
    &:nth-child(2) {
      z-index: 2;
      transform: translateX(-102%);
    }
    &:nth-child(3) {
      z-index: 4;
    }
    &:nth-child(4) {
      z-index: 2;
      transform: translateX(102%);
    }
    &:nth-child(n + 5) {
      z-index: 1;
      transform: translateX(200%);
    }
  }

  @media (min-width: 1200px) {
    box-sizing: content-box;
  } ;
`;

const Inner = styled.div`
  margin: 20px 0;

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
  z-index: 400;
  cursor: pointer;

  &#next {
    right: calc((100% - 1200px) / 2);
  }

  &#prev {
    left: calc((100% - 1210px) / 2);
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    visibility: hidden;
  } ;
`;
export default CarouselSlide;
