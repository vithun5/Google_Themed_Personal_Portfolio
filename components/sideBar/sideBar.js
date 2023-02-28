import {
  SideBarContainer,
  ImageWrapper,
  ResumeWrapper,
  ContactDetails,
  ContactItems,
} from "./sideBar.style";
import Image from "next/image";
import { sideBarInfo } from "../../constants/constants";
import { AiOutlineDownload } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
const SideBar = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <SideBarContainer>
      <ImageWrapper theme={darkMode}>
        <Image
          src={"/assets/profile.jpg"}
          width={198}
          height={240}
          alt="profileimage"
        />
        <p>{sideBarInfo.info}</p>
        <ResumeWrapper href="/assets/Vithunresume.pdf">
          {`Vithun's Resume`}
          <AiOutlineDownload size={19} />
        </ResumeWrapper>
      </ImageWrapper>
      <hr style={{ width: "95%", margin: "0 auto" }}></hr>
      <ContactDetails>
        {sideBarInfo.OtherDetails.map(({ icon: Icon, title, src }, index) => {
          return (
            <ContactItems key={title}>
              <Icon size={20} color={darkMode ? "white" : "black"} />
              {index == 1 ? (
                <p>{title}</p>
              ) : (
                <a href={src} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              )}
            </ContactItems>
          );
        })}
      </ContactDetails>
    </SideBarContainer>
  );
};

export default SideBar;
