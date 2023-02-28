import styled from "styled-components";

export const SideBarContainer = styled.main`

  width: 40%;
  border: 1px solid #BCC0C3 ;
  margin: 1.5rem;
  border-radius: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;p

  & > p {
    margin-top: 1rem;
    text-align: center;
  }
`;

export const ResumeWrapper = styled.a`
  border: 1px solid #ebebeb;
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.headingColor};
  font-weight: 600;
  display: flex;
  gap: 0.4rem;
  padding: 1rem;
  margin-top: 1rem;
  justify-content: center;
  width: 60%;
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.colors.contentBackground};
  @media ${(props) => props.theme.breakpoints.xl} {
    width: 80%;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 80%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
`;

export const ContactItems = styled.section`
  padding-left: 1rem;
  display: flex;
  gap: 1rem;
`;
