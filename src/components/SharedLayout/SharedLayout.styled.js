import styled from 'styled-components';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background: none;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    position: relative;
    font-size: 2rem;
    padding: 0 20px;
    &:hover {
      color: #ccc;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover:after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;

    a {
      font-size: 2rem;
    }
  }
`;

export { Container, Header, Nav };
