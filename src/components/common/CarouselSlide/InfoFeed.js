import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LinkToButton } from '../../../assets/icon-link_to_button.svg';

const InfoFeed = ({ feedInfo }) => {
  const {
    image,
    info: { headLine, description },
  } = feedInfo;
  const [width, setWidth] = useState(0);

  const setCurrentSlideWidth = ({ target }) => {
    setWidth(target.offsetWidth);
  };

  return (
    <Container width={width}>
      <ImageContainer>
        <InfoLink to="#">
          <Img
            alt="wantedImg"
            onLoad={setCurrentSlideWidth}
            src={`/images/${image}`}
          />
        </InfoLink>
      </ImageContainer>
      <DetailInfoContainer>
        <h2>{headLine}</h2>
        <h3>{description}</h3>
        <hr className="divider" />
        <DirectLink to="#">
          <DirectButton>
            바로가기
            <span className="directSvgButton">
              <span className="svgInner">
                <LinkToButton width="1em" height="1em" fill="#36f" />
              </span>
            </span>
          </DirectButton>
        </DirectLink>
      </DetailInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: ${({ width }) => width}px;
  display: inline-block;
`;

const ImageContainer = styled.div`
  filter: brightness(50%);
`;

const InfoLink = styled(Link)`
  ${({ theme }) => theme.linkReset};
  color: inherit;
  cursor: pointer;
`;

const Img = styled.img`
  display: inline-block;
  border-radius: 4px;
  object-fit: cover;
`;

const DetailInfoContainer = styled.div`
  @media (min-width: 1200px) {
    position: absolute;
    bottom: 28px;
    left: 34px;
    width: 330px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    opacity: 1;
    text-align: left;
  }

  & h2 {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media (min-width: 1200px) {
      margin-left: 20px;
      margin-right: 20px;
      font-size: 20px;
      line-height: 1.5;
    }
  }

  & h3 {
    margin-top: 6px;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.15;
    color: #666;
    width: 'auto';
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media (min-width: 1200px) {
      margin: 0 20px;
      height: 44px;
      font-size: 14px;
      line-height: 1.64;
      color: #333;
    }
  }

  & .divider {
    height: 1px;
    margin: 0;
    border: none;
    flex-shrink: 0;
    background-color: #ececec;

    @media (min-width: 1200px) {
      display: block;
    }
  }
`;

const DirectLink = styled(Link)`
  ${({ theme }) => theme.linkReset};
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  cursor: pointer;
  height: 40px;
  padding: 6px 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #36f;

  @media (min-width: 1200px) {
    margin: 6px 0 0 13px;
  }
`;

const DirectButton = styled.span`
  width: 100%;
  font-size: inherit;
  font-weight: inherit;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  color: inherit;

  & .directSvgButton {
    margin: -2px -1px 0 2px;

    & .svgInner {
      width: 100%;
      display: flex;
      justify-content: inherit;
      align-items: inherit;
    }
  }
`;
export default InfoFeed;
