import styled from 'styled-components';

const ButtonBase = styled.button`
  color: ${ props => props.filled ? props.textColor : props.color };
  background-color: ${props => props.filled ? props.color : 'transparent'};
  border: ${props => props.filled ? 'none' : `1px solid ${props.color}`};
  border-radius: 24px;
  cursor: pointer;
  font-size: 16px;
  padding: 16px;
  ${props => props.fullWidth && 'width: 100%;' }
`;

export const Button = ({ text, filled, fullWidth, color = 'black', textColor="white", ...props }) => {
  return (
    <ButtonBase filled={filled} color={color} fullWidth={fullWidth} textColor={textColor} {...props}>
      {text}
    </ButtonBase>
  )
}
