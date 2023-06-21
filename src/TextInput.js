import styled from "styled-components"

const TextInputBase = styled.input`
  border: 1px solid #777;
  border-radius: 24px;
  outline: none;
  font-size: 16px;
  padding: 16px;
  padding-left: 24px;
  box-sizing: border-box;
  ${props => props.fullWidth && 'width: 100%;'}
`;

export const TextInput = ( { fullWidth, ...props }) => {
    return <TextInputBase fullWidth={fullWidth} { ...props } />
}