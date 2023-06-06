import PropTypes from 'prop-types';
import DefaultAvatar from 'components/DefaultImg/DefaultAvatar.png';
import { CastWrapper } from './CastItem.styled';

const CastItem = ({ poster, name, character }) => {
  return (
    <CastWrapper>
      <img
        src={
          poster === null
            ? DefaultAvatar
            : `https://image.tmdb.org/t/p/w500/${poster}`
        }
        alt={`${name}(${character})`}
      />
      <h3>{name}</h3>
      <p>{character}</p>
    </CastWrapper>
  );
};

export default CastItem;
CastItem.propTypes = {
  poster: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
