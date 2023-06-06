import styled from 'styled-components';
const ReviewsItemContainer = styled.li`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 20px;

  h4 {
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  p {
    flex-grow: 1;
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
  }
`;
export { ReviewsItemContainer };
