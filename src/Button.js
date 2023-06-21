import styled from 'styled-components';

const ButtonBase = styled.button`
  color: ${ props => props.filled ? 'white' : props.color };
  background-color: ${props => props.filled ? props.color : 'transparent'};
  border: ${props => props.filled ? 'none' : `1px solid ${props.color}`};
  border-radius: 24px;
  cursor: pointer;
  font-size: 16px;
  padding: 16px;
`;

export const Button = ({ text, filled, color = 'black' }) => {
  return (
    <ButtonBase filled={filled} color={color}>
      {text}
    </ButtonBase>
  )
}
