import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 36px;
  display: flex;
  margin-bottom: 8px;
  padding: 8px;  
`;

export const ListItemContainer = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  )
}
