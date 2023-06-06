import DefaultJpeg from './DefaultImg.jpeg';
import { StyledDefaultImg } from './DefaultImg.styled';

export const DefaultImg = () => {
  return <StyledDefaultImg src={DefaultJpeg} alt="error" />;
};
