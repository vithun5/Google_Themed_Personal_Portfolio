import { useState } from "react";
import {
  AccordionItem,
  AccordionTitle,
  AccordionContent,
} from "./PeopleAlsoAsk.styled";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import NavLink from "next/link";

const Accordion = ({ question, answer, index }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionItem>
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        <div>{question}</div>
        <div>
          {!isActive ? (
            <MdKeyboardArrowDown size={"20px"} />
          ) : (
            isActive && <MdKeyboardArrowUp size={"20px"} />
          )}
        </div>
      </AccordionTitle>
      {isActive && (
        <AccordionContent>
          {answer}
          {index === 0 && (
            <a>
              <NavLink href="/skills">view all skills...</NavLink>
            </a>
          )}
        </AccordionContent>
      )}
    </AccordionItem>
  );
};

export default Accordion;
