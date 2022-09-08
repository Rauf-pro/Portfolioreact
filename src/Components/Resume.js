import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import ResumeItem from "./ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2021-2022"}
            title={"Junior Front End Developer"}
            subTitle={"Labrin Tech"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consectetur fugiat soluta incidunt aspernatur iusto, voluptas laborum molestias aut natus!"
            }
          />
          <ResumeItem
            year={"2021-2022"}
            title={"Front End Developer"}
            subTitle={"Payment LLC"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consectetur fugiat soluta incidunt aspernatur iusto, voluptas laborum molestias aut natus!"
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2003-2007"}
            title={"Computer Science Degree"}
            subTitle={"Azerbaijan Technical University"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consectetur fugiat soluta incidunt aspernatur iusto, voluptas laborum molestias aut natus!"
            }
          />
          <ResumeItem
            year={"2021-2022"}
            title={"Front End Developer"}
            subTitle={"Self Styding"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consectetur fugiat soluta incidunt aspernatur iusto, voluptas laborum molestias aut natus!"
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin{
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 1px solid var(--border-color);
  }
`;
export default Resume;
