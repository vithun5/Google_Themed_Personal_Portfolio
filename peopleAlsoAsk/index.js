import { BiDotsVerticalRounded } from "react-icons/bi";

import { accordionData } from "../constants/constants";
import Accordion from "./Accordion";
import {
  AccordionContainer,
  AccordionTitle,
  Heading,
} from "./PeopleAlsoAsk.styled";

const PeopleAlsoAsk = () => {
  return (
    <AccordionContainer>
      <AccordionTitle>
        <Heading>People also ask</Heading>
        <BiDotsVerticalRounded size={20} />
      </AccordionTitle>
      <div>
        {accordionData.map(({ question, answer }, index) => (
          <Accordion
            key={question}
            question={question}
            answer={answer}
            index={index}
          />
        ))}
      </div>
    </AccordionContainer>
  );
};

export default PeopleAlsoAsk;
