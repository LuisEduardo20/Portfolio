import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  min-height: 550px;

  border-radius: 10px;

  background-color: var(--white);

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    min-height: 750px;

    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h4`
  color: var(--black);
  font-weight: 600;
  font-size: 1.5rem;
  text-decoration: underline;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Picture = styled.img`
  max-width: 40%;
  border-radius: 50%;
`;

export const MyDescription = styled.div`
  width: 80%;
  padding: 20px;

  border-radius: 10px;

  background-color: var(--black);
  color: var(--white);
  font-size: 1rem;

  @media screen and (max-width: 768px) {
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    width: 100%;

    flex-direction: column;
  }
`;

export const IconsArea = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

export const Icon = styled.img`
  width: 12%;
`;
