import React from "react";
import TitleDesc from "../components/TitleDesc";
import { info } from "../constants/constants";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import {
  Heading,
  HomeContainer,
  InfoContainer,
  MobileProfile,
  ResumeWrapper,
  Text,
  WorkExperience,
  Company,
  ProjectList,
} from "../styles/Home.styled";
import SideBar from "../components/sideBar/sideBar";
import PeopleAlsoAsk from "../peopleAlsoAsk";
import RelatedSearch from "../RelatedSearch";
const Home = () => {
  return (
    <div>
      <TitleDesc
        title="Vithun Shankar"
        desc="This is Google theme portfolio created by Vithun Shankar using nextjs Framework. "
      />
      <HomeContainer>
        <InfoContainer>
          <Heading> {info.heading}</Heading>
          <Text>{info.description}</Text>
          <MobileProfile>
            <Image
              src="/assets/profile.jpg"
              alt="Profile"
              width={230}
              height={250}
            />
          </MobileProfile>
          <span>
            <ResumeWrapper
              href="/assets/Vithunresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`Vithun's Resume`}
              <AiOutlineDownload size={19} />
            </ResumeWrapper>
          </span>
          <WorkExperience>
            <Heading> {info.workExperience}</Heading>
            <strong>{info.designation}</strong>
            <Company>
              <p>{info.company}</p>
              <i>{info.timePeriod}</i>
            </Company>
            <ProjectList>
              {info.workProjects.map(({ title, description }) => {
                return (
                  <li key={title}>
                    <strong>{title}</strong>{" "}
                    <span
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></span>
                  </li>
                );
              })}
            </ProjectList>
          </WorkExperience>
          <PeopleAlsoAsk />
          <RelatedSearch />
        </InfoContainer>
        <SideBar />
      </HomeContainer>
    </div>
  );
};

export default Home;
