import styled from "styled-components";

export const Container = styled.div`
  width: 90%;

  border-radius: 10px;

  background-color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const UserSection = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 20px 0 20px 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  width: 80%;

  padding: 20px;

  border-radius: 10px;

  background-color: var(--black);
  color: var(--white);
`;

export const Skills = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const IconsArea = styled.div``;

export const Icon = styled.img``;

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
  max-width: 50%;
  border-radius: 50%;
`;
