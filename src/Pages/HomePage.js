import React from "react";
import styled from "styled-components";
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from "../Components/Particle";




function HomePage() {
  return (
    <HomePageStyled>
    <div className="particle-con">
        {/* <Particle/> */}
    </div>
      <div className="p-particles-js"></div>
      <div className="typogrphy">
        <h1>
          Hi I'm <span>Rauf</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          harum. At hic sequi iure ullam? Ad accusantium molestias incidunt
          doloremque.
        </p>
        <div className="icons">
            <a href="#" className="icon i-facebook">
                <FacebookIcon/>
            </a>
            <a href="#" className="icon i-github">
                <GithubIcon/>
            </a>
            <a href="#" className="icon i-youtube">
                <YoutubeIcon/>
            </a>


        </div>
      </div>
    </HomePageStyled>
  );
}
const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }
  .typogrphy{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .icon{
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all .4s ease-in-out;
            cursor: pointer;
            &:hover{
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
            }
            &:not(:last-child){
                margin-right: 1rem;
               
            }
            svg{
                margin: .5rem;
            }
        }
        .i-youtube{
            &:hover{
                border: 2px solid red;
                color: red;
            }

        }
        .i-github{
            &:hover{
                border: 2px solid #5F4687;
                color: #5F4687;
            }

        }
    }

  }
`;
export default HomePage;
