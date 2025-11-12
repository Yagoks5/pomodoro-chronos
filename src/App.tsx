// PascalCase
// App
// HeaderHeading

import './styles/theme.css';
import './styles/global.css';
import Container from './components/Container';
import Heading from './components/Heading';

export default function App() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}
