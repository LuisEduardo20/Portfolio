import styled from "styled-components";

export const Container = styled.div`
  flex: 0 0 35%;
  height: 100%;

  background-color: var(--white);

  padding: 20px;
  margin-left: 40px;
  gap: 25px;

  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 40% 30% 1fr;

  place-items: center;

  &:first-child {
    margin-left: 0;
  }

  @media screen and (max-width: 768px) {
    height: 100%;

    grid-template-rows: 1fr 1.5fr 2fr 1fr;
    gap: 10px;

    flex: 0 0 75%;
  }
`;

export const Title = styled.h3`
  text-align: center;
  color: var(--black);
  font-size: 1.5rem;
  font-weight: normal;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  background-color: var(--black);
  color: var(--white);
  border-radius: 10px;
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Link = styled.a`
  padding: 20px;
  background-color: var(--button-background);
  border-radius: 10px;

  color: var(--white);
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    margin-bottom: 10px;
  }
`;
