import { Reviews } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import ReviewsSection from '../Components/ReviewsSection';
import ServiceSection from '../Components/ServiceSection';
import Title from '../Components/Title';
import { MainLayout } from '../styles/Layouts';

function AboutPage() {
  return (
    <MainLayout>
        <AboutStyled>
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection/>
            <ServiceSection/>
            <ReviewsSection/>
        </AboutStyled>
    </MainLayout>
  )
}
const AboutStyled = styled.section`
@media screen and (max-width:1000px){
  
}

`;
export default AboutPage