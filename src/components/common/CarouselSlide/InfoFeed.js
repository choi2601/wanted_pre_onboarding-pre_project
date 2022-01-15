import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InfoFeed = () => {
  return (
    <Container>
      <ImageContainer>
        <InfoLink to="#">
          <img src="/images/slide_image-1.jpeg" />
        </InfoLink>
      </ImageContainer>
      <DetailInfoContainer>
        <h2>두헨즈 개발 채용</h2>
        <h3>매년 유급 안식월 지원!</h3>
        <hr className="divider" />
        <DirectLink to="#">
          <span>바로가기</span>
        </DirectLink>
      </DetailInfoContainer>
    </Container>
  );
};

const Container = styled.div``;

const ImageContainer = styled.div``;

const InfoLink = styled(Link)``;

const DetailInfoContainer = styled.div``;

const DirectLink = styled(Link)``;

export default InfoFeed;
