import styled from "styled-components"

const TextInputBase = styled.input`
  border: 1px solid #777;
  border-radius: 24px;
  outline: none;
  font-size: 16px;
  padding: 16px;
  padding-left: 24px;
`;

export const TextInput = ( props ) => {
    return <TextInputBase { ...props } />
}