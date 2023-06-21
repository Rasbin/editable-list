import styled from 'styled-components';

const ButtonBase = styled.button`
  color: white;
  background-color: green;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 16px;
  padding: 16px;
`;

export const Button = ({ text }) => {
  return (
    <ButtonBase>
      {text}
    </ButtonBase>
  )
}
