import styled from '@emotion/styled';
import React from 'react';

const AdCarousel = () => (
  <Carousel>
    <Card />
    <Card />
    <Card />
    <Card />
  </Carousel>
);

const Card = () => <CardWrapper />;

const Carousel = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
`;
const CardWrapper = styled.div`
  width: 130px;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  flex-shrink: 0;
`;

export default AdCarousel;
