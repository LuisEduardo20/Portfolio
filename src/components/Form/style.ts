import styled from "styled-components";

export const Input = styled.input`
  width: 80%;
  height: 60px;

  font-size: 1.45rem;
  padding-left: 20px;
  padding-right: 20px;

  color: var(--black);
  background-color: var(--input-background);

  border: none;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--input-placeholder);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Text = styled.textarea`
  width: 80%;
  font-size: 1.45rem;
  padding: 20px;

  color: var(--black);
  background-color: var(--input-background);

  border: none;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--input-placeholder);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Submit = styled.button`
  width: 80%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;

  color: var(--white);
  background-color: var(--button-background);
  border: 0;
  border-radius: 10px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background-color: var(--black);
  }

  & > img {
    margin-left: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    & > img {
      margin-left: 10px;
    }
  }
`;
