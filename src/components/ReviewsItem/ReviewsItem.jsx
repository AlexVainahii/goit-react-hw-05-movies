import { ReviewsItemContainer } from './ReviewsItem.styled';

const ReviewsItem = ({ author, content }) => {
  return (
    <ReviewsItemContainer>
      <h4>{author}</h4>
      <p>{content}</p>
    </ReviewsItemContainer>
  );
};

export default ReviewsItem;
