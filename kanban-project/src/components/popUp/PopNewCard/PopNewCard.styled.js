import styled from "styled-components";

export const ProdCheckbox = styled.strong`
  color: #333;
  display: inline-block;
  margin-right: 10px;
  letter-spacing: 0.5px;
`;

export const RadioToolbar = styled.div`
  
`;

export const InputRadio1 = styled.input`
  display: none;

  &:checked + label {
    opacity: 100%;
  }
`;

export const LabelRadio1 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #ff6d00;
  background: #ffe4c2;
  cursor: pointer;
  margin-right: 7px;
  opacity: 40%;

  &:hover {
    opacity: 100%;
  }
`;

export const InputRadio2 = styled.input`
  display: none;

  &:checked + label {
    opacity: 100%;
  }
`;

export const LabelRadio2 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #06b16e;
  background: #b4fdd1;
  cursor: pointer;
  margin-right: 7px;
  opacity: 40%;

  &:hover {
    opacity: 100%;
  }
`;

export const InputRadio3 = styled.input`
  display: none;

  &:checked + label {
    opacity: 100%;
  }
`;

export const LabelRadio3 = styled.label`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #9a48f1;
  background: #e9d4ff;
  cursor: pointer;
  margin-right: 7px;
  opacity: 40%;

  &:hover {
    opacity: 100%;
  }
`;
