import styled from "styled-components";

export const Container = styled.div`
  width: 90%;

  margin: 40px 0 40px 0;
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  color: var(--white);
  font-size: 2rem;
  font-weight: 600;
  text-decoration: underline;
  text-align: center;
`;

export const ProjectsSlider = styled.ul`
  width: 100%;
  height: 700px;
  min-width: 0px;
  padding-bottom: 20px;

  overflow-x: scroll;

  display: inline-flex;

  @media screen and (max-width: 768px) {
    height: 600px;
  }
`;
