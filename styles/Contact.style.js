import styled from "styled-components";

export const ContactContainer = styled.main`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
  flex-direction: column;
  margin: 2rem;
  align-items: center;
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    margin: 0;
  }
`;

export const BasicDetails = styled.div`
  display: grid;
  gap: 1.5rem;
  width: 80%;
  grid-template-columns: auto auto;
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    margin-top: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
  }
`;

export const BasicDetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  justify-content: space-between;
  padding: 1rem;
  transition: 1000ms all;
  align-items: center;
  background: ${({ theme }) => theme.colors.contentBackground};
  filter: drop-shadow(
      0 ${({ darkMode }) => (darkMode ? "1px" : "4px")}
        ${({ darkMode }) => (darkMode ? "2px" : "3px")}
        ${({ theme }) => theme.colors.primary}
    )
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  width: 100%;
  & > h2 {
    text-align: center;
    font-size: 2rem;
    padding: 0.8rem;
  }
  &: hover {
    background: ${({ theme }) => theme.colors.contentHover};
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.5rem !important;
    padding: 0.8rem;
    color: ${({ theme }) => theme.colors.headingColor};
    & > h2 {
      font-size: 1.5rem;
    }
    & > svg {
      width: 20px;
    }
  }
 
`;
export const ContactForm = styled.section`
  background: ${({ theme }) => theme.colors.contentBackground};
  padding: 2rem;
  margin: 2rem;
  filter: drop-shadow(
      0 ${({ darkMode }) => (darkMode ? "1px" : "4px")}
        ${({ darkMode }) => (darkMode ? "2px" : "3px")}
        ${({ theme }) => theme.colors.primary}
    )
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  width: 80%;
  transition: 500ms all;
  div {
    display: flex;
    margin: 1rem;
    flex-direction: column;
  }
  input[type="text"],
  input[type="email"],
  textarea {
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 0.7rem;
    padding: 1rem;
    width: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.primary};
    &:focus {
      outline: none;
      border: 2px solid #979a9a;
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
      margin-top: 1rem;
    }
  }
  textarea {
    height: 12rem;
    resize: none;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    font-size: 1.5rem;
    div {
      margin: 0;
    }
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    div {
      margin-top: 2rem;
    }
  }
`;
export const SubmitButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 0.7rem;
  font-size: 1.6rem;
  align-items: center;
  border: 2px solid transparent;
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.headingColor};
  background-color: ${({ theme }) => theme.colors.contentHover};

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.contentHover};
    background-color: ${({ theme }) => theme.colors.contentBackground};
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 1.5rem;
    margin: 0;
    flex-shrink: 0;
  }
`;

export const NameEmail = styled.section`
  display: flex;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 49%;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    div {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;

export const SubmitWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: row !important;
  gap: 0.6rem;
`;

export const Spinner = styled.section`
  border: 0.6rem solid ${({ theme }) => theme.colors.contentHover};
  border-top: 0.6rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  min-height: 3.5rem;
  width: 3%;
  max-height: 3.5rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ResultWrapper = styled.div`
  color: ${({ error }) => (error ? "#88452F" : "#155724")};
  background-color: ${({ error }) => (error ? "#F8D7DA" : "#d4edda")};
  padding: 1rem;
  border-radius: 0.7rem;
  text-align: center;
  border: 1px solid ${({ error }) => (error ? "#F5C6CB" : "#c3e6cb")};
  visibility: ${({ showResult }) => (showResult ? "visible" : "hidden")};
`;
