import styled from "styled-components";

export const ProjectContainer = styled.main`
  margin-top: 2rem;
  transition: 500 all;
  width: 100%;
  padding: @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0 calc(92px);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0px;
  }
`;

export const ProjectItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  width: 70%;
  margin: 0 auto 0 auto;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    & > img {
      width: initial;
    }
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    gap: 2rem 0 0 0;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
  }
`;

export const ProjectDetails = styled.div`
  filter: drop-shadow(0 ${({ darkMode }) => (darkMode ? "2px" : "4px")} 3px)
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  transition: 500ms all;
  padding: 1.5rem 0;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  width: initial;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.contentBackground};
  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.colors.contentHover};
    }
    &:hover {
      transform: scale(105%);
    }
  }
  color: ${({ theme }) => theme.colors.headingColor};
  & > h3 {
    text-align: center;
    font-weight: 500;
    padding: 0 0.5rem;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.headingColor};
  }
  & > a {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.contentHover};
    color: ${({ theme }) => theme.colors.headingColor};
    font-size: 1.8rem;
    font-weight: 500;
    border: 2px solid ${({ theme }) => theme.colors.contentHover};
    padding: 0.6rem 0.8rem;
    margin: 0 auto 0 auto;
    margin-top: 1rem;
    border-radius: 1.2rem;
    transition: all 0.5s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      border: 2px solid ${({ theme }) => theme.colors.secondary};
    }
  }
  & > p {
    margin: 10px;
  }
  & > ul {
    margin: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
      & > img {
        width: initial;
      
      }
    
  
`;
