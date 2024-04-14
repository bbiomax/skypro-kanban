import styled from "styled-components";

// export const ProdCheckbox = styled.strong`
//   color: #333;
//   display: inline-block;
//   margin-right: 10px;
//   letter-spacing: 0.5px;
// `;

export const RadioToolbar = styled.div`
  display: flex;
  gap: 7px;
`;

export const InputRadio1 = styled.input`
  display: none;

  &:checked + label {
    background: #94A6BE;
    color: white;
  }
`;

export const LabelRadio = styled.label`
  display: inline-block;
  padding: 10px 14px;
  border: 0.7px solid #94a6be66;
  border-radius: 24px;
  color: #94a6be66;
  font-size: 14px;
  background: transparent;
  cursor: pointer;

  &:hover {
    opacity: 100%;
  }
`;

export const InputRadio2 = styled.input`
  display: none;

  &:checked + label {
    background: #94A6BE;
    color: white;
  }
`;

export const InputRadio3 = styled.input`
  display: none;

  &:checked + label {
    background: #94A6BE;
    color: white;
  }
`;

export const InputRadio4 = styled.input`
  display: none;

  &:checked + label {
    background: #94A6BE;
    color: white;
  }
`;

export const InputRadio5 = styled.input`
  display: none;

  &:checked + label {
    background: #94A6BE;
    color: white;
  }
`;
