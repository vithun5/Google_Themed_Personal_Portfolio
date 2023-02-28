import Image from "next/image";
import { ProjectData } from "../constants/constants";
import {
  ProjectContainer,
  ProjectItems,
  ProjectDetails,
} from "../styles/Projects.styled";
const Projects = () => {
  return (
    <ProjectContainer>
      <ProjectItems>
        {ProjectData.map(({ title, image, description, link }) => {
          return (
            <ProjectDetails key={title}>
              <h3>{title}</h3>
              <Image src={image} alt="image" width={400} height={200} />
              <ul>
                {description.map((sentence) => {
                  return (
                    <li
                      key={sentence}
                      dangerouslySetInnerHTML={{ __html: sentence }}
                    ></li>
                  );
                })}
              </ul>

              <a href={link}>Source</a>
            </ProjectDetails>
          );
        })}
      </ProjectItems>
    </ProjectContainer>
  );
};

export default Projects;
