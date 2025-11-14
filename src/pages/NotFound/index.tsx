import Container from '../../components/Container';
import MainTemplate from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>Page not found</p>
      </Container>
    </MainTemplate>
  );
}
