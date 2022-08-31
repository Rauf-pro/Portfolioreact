import React from "react";
import styled from "styled-components";
import image1 from "../img/image1.jpg";

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
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  .left-content {
    margin-right: 2rem;
    img {
      width: 100%;
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
      .info-title{
        padding-right: 3rem;
        p{
            font-weight: 400;
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
