import {
  ContactContainer,
  BasicDetails,
  BasicDetailsItem,
  SubmitButton,
  ContactForm,
  NameEmail,
  Spinner,
  SubmitWrapper,
  ResultWrapper,
} from "../styles/Contact.style";
import { contactData, ContactDetails } from "../constants/constants";
import { useContext, useState, useRef } from "react";
import { ThemeContext } from "./_app";
import { AiOutlineSend } from "react-icons/ai";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isLoading, SetIsLoading] = useState(false);
  const [error, SetError] = useState(false);
  const [showResult, SetShowResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    SetIsLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_UNIQUE_KEY
      )
      .then(
        (result) => {
          console.log(result);
          SetShowResult(true);
          SetIsLoading(false);
        },
        (error) => {
          console.log(error);
          SetError(true);
          SetShowResult(true);
          SetIsLoading(false);
        }
      );
    e.target.reset();
  };

  setTimeout(() => {
    SetShowResult(false);
  }, 6000);
  return (
    <ContactContainer>
      <BasicDetails>
        {ContactDetails.BasicDetails.map(({ icon: Icon, title, src, href }) => {
          return (
            <BasicDetailsItem key={title}>
              <Icon size={30} />

              <h2>{title}</h2>
              {title == "LinkedIn" ? (
                <a href={href} target="_blank" rel="noreferrer">
                  <p style={{ textDecoration: "underline" }}>{src}</p>
                </a>
              ) : (
                <p>{src}</p>
              )}
            </BasicDetailsItem>
          );
        })}
      </BasicDetails>
      <ContactForm darkMode={darkMode}>
        <form ref={form} onSubmit={sendEmail}>
          <NameEmail>
            <div>
              <label>{contactData.nameLabel}</label>
              <input
                type="text"
                placeholder="Your name..."
                name="user_name"
                required
              />
            </div>
            <div>
              <label>{contactData.emailLabel}</label>
              <input
                type="email"
                placeholder="Your email..."
                required
                name="user_email"
              />
            </div>
          </NameEmail>
          <div>
            <label>{contactData.subjectLabel}</label>
            <input
              type="text"
              placeholder="Subject..."
              required
              name="subject"
            />
          </div>
          <div>
            <label>{contactData.messageLabel}</label>
            <textarea placeholder="Message..." required name="message" />
          </div>

          <SubmitWrapper>
            <SubmitButton type="submit">
              {contactData.sendButton}
              <AiOutlineSend size={18} />
            </SubmitButton>
            {isLoading && <Spinner></Spinner>}
            <ResultWrapper error={error} showResult={showResult}>
              {error ? contactData.errorMessage : contactData.successMessage}
            </ResultWrapper>
          </SubmitWrapper>
        </form>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
