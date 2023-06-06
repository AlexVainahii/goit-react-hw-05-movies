import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BackButton = styled(Link)`
  position: absolute;
  z-index: 5;
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(135deg, #eb0e0e 0%, #c63535 50%, #eb0e0e 100%);
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  &:hover {
    background: linear-gradient(135deg, #200000 0%, #d9d9d9 50%, #200000 100%);
    color: #eb0e0e;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const GenreContainer = styled.div`
  gap: 10px;
  margin-top: 10px;
  text-align: center;
  border: 2px solid gray;
  border-radius: 2px;
  padding: 10px;
  background: linear-gradient(135deg, #eb0e0e 0%, #c63535 50%, #eb0e0e 100%);
  color: white;
  margin: 10px;
  div {
    display: flex;
    gap: 5px;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  max-width: 480px;
  border-radius: 4px;
  img {
    width: 100%;
    border-radius: 4px;
  }
`;
const ButtonLinkContainer = styled.div`
  display: flex;
  width: 50%;
  position: absolute;
  justify-content: space-around;
  bottom: 5px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const ButtonLinkContainerDetails = styled.div`
  display: none;
  margin: 10px;
  width: 100%;
  justify-content: space-around;
  bottom: 5px;
  @media (max-width: 1000px) {
    display: flex;
    background: none;
    border: none;
  }
`;
const DetailsContainer = styled.div`
  text-align: center;
  border: 2px solid gray;
  border-radius: 2px;
  padding: 10px;
  background: linear-gradient(135deg, #eb0e0e 0%, #c63535 50%, #eb0e0e 100%);
  color: white;
  margin: 10px;
`;

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  max-width: 460px;
  flex-grow: 1;
  justify-content: space-around;
  border-radius: 4px;

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 10px;
  }
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  margin-right: 10px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #eb0e0e 0%, #c63535 50%, #eb0e0e 100%);
  color: white;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  width: 20%;
  &:hover {
    background: linear-gradient(135deg, #200000 0%, #d9d9d9 50%, #200000 100%);
    color: #eb0e0e;
  }
`;

const ButtonGenre = styled.p`
  display: inline-block;
  margin-right: 5px;
  padding: 5px 5px;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  width: 28%;
  P {
  }
`;

export {
  BackButton,
  ButtonLink,
  MovieDetailsContainer,
  Container,
  GenreContainer,
  ButtonGenre,
  ImageWrapper,
  ButtonLinkContainer,
  ButtonLinkContainerDetails,
  DetailsContainer,
};
