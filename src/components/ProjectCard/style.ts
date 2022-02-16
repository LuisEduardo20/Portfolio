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
    height: 80%;

    grid-template-rows: 1fr 30% 50% 1fr;
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
`;

export const Link = styled.a`
  color: var(--black);
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(2);
  }
`;
