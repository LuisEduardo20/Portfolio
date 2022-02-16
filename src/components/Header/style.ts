import styled from "styled-components";

export const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;

  background-color: var(--black);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.35);
`;

export const Content = styled.header`
  width: 90%;
  height: 6rem;

  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 4rem;
    justify-content: space-evenly;
  }
`;

export const HeaderLink = styled.a`
  color: var(--white);
  font-weight: 600;
  font-size: 1.5rem;

  margin-right: 40px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-right: 0;
  }
`;
