import { Link, Outlet } from 'react-router-dom';
import { Container, Header, Nav } from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">HOME</Link>
          <Link to="/movies">MOVIES</Link>
        </Nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
