import React from "react";
import styled from "styled-components";
import image1 from "../img/myphoto.jpg";
import PrimaryButton from "./PrimariButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={image1} alt="" />
      </div>
      <div className="right-content">
          <h4>
            I am Rauf <span>Lorem Ipsum</span>
          </h4>

        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda
          illo excepturi veniam dolore voluptates nesciunt voluptatem temporibus
          sunt doloremque voluptatum dolorum quisquam vitae ea, nemo saepe. Odit
          dolorum deserunt esse voluptatibus libero.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Lorem Ipsum</p>
            <p>: 36</p>
            <p>: Azerbaijan</p>
            <p>: Azerbaijan, English, Russian</p>
            <p>: Azerbaijan, Baku</p>
            <p>Freelance</p>
          </div>
        </div>
        <PrimaryButton title={'Download Cv'}/>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width:1000px){
    flex-direction: column;
    .left-content{
      margin-bottom: 2rem;
    }
  
}
  .left-content {
    margin-right: 2rem;
    width: 100%;
    
    img {
      width: 100%;
      /* height: 100%; */
      object-fit: cover;
    }
  }
  .right-content {
    
    h4{
        font-size: 2rem;
        color: var(--white-color);
        span{
            font-size: 2rem;
        }
    }
    .paragraph{
        padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title{
        padding-right: 3rem;
        p{
            font-weight: 600;
        }
      }
      .info-title, .info{
        p{
            padding: .3rem 0;
        }

      }
    }
  }
`;
export default ImageSection;
