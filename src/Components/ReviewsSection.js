import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ReviewItem from "./ReviewItem";

function ReviewsSection() {
  return (
    <ReviewsSectionStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}/>
          <ReviewItem text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.amet consectetur adipisicing elit'}/>
          
        </div>
      </InnerLayout>
    </ReviewsSectionStyled>
  );
}

const ReviewsSectionStyled = styled.section`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    width: 100%;
    @media screen and (max-width:650px){
      grid-template-columns: repeat(1, 1fr);
      
  
     }
  }
`;
export default ReviewsSection;
