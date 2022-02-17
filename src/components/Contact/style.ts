import styled from "styled-components";

export const Container = styled.div`
  width: 35%;
  height: 850px;
  margin: 40px 0 40px 0;

  background-color: var(--white);
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 1fr;

  @media screen and (max-width: 768px) {
    width: 90%;

    margin: 20px 0 20px 0;
    padding: 20px;

    grid-template-rows: 8% 1fr;
  }
`;

export const Title = styled.h2`
  margin-top: 20px;

  color: var(--black);
  font-weight: 600;
  font-size: 2rem;
  text-decoration: underline;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
