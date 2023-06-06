import styled from 'styled-components';
const CastListContainer = styled.ul`
  list-style: none;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 0;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;
export { CastListContainer };
