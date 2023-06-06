import { DefaultImg } from 'components/DefaultImg/DefaultImg';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/ApiService';
import { MyLoader } from 'service/Loader';
import { ReviewsListContainer } from './Reviews.syled';
const Reviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovieReview() {
      try {
        const res = await getMovieReviews(movieId);
        console.log(res);
        if (!res) {
          setError(true);
        }
        setMovieReview(res);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieReview();
  }, [movieId]);

  return (
    <>
      {error ? (
        <DefaultImg />
      ) : isLoading ? (
        <MyLoader />
      ) : (
        <ReviewsListContainer>
          {movieReview.map(({ id, author, content }) => (
            <ReviewsItem key={id} author={author} content={content} />
          ))}
        </ReviewsListContainer>
      )}
    </>
  );
};

export default Reviews;
