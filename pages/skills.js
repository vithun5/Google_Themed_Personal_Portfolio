import { skillsData } from "../constants/constants";
import Image from "next/image";
import {
  SkillItem,
  SkillContainer,
  SkillOverview,
  SkillIconGrid,
} from "../styles/skill.styled";
const Skills = () => {
  return (
    <div>
      <SkillContainer>
        <p>{skillsData.info}</p>

        <SkillOverview>
          {skillsData.skills.map(({ title, description }) => {
            return (
              <div key={title}>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            );
          })}
        </SkillOverview>

        <SkillIconGrid>
          {skillsData?.skillsIcon?.map(({ title, href, src, shadowColor }) => {
            return (
              <SkillItem
                key={title}
                shadowColor={shadowColor}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                
                <Image alt="skills" width={45} height={45} src={src} />
                <p>{title}</p>
              </SkillItem>
            );
          })}
        </SkillIconGrid>
      </SkillContainer>
    </div>
  );
};

export default Skills;
