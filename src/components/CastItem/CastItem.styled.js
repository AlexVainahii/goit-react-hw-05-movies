import styled from 'styled-components';
const CastWrapper = styled.li`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  padding: 5px;
  img {
    height: 300px;
    width: 100%;
    object-fit: scale-down;
    border-radius: 4px;
  }

  h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export { CastWrapper };
