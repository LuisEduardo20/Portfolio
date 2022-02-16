import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 0 40px 0;

  background-color: var(--black);

  @media screen and (max-width: 768px) {
    padding: 20px 0 20px 0;
  }
`;
