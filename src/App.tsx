// PascalCase
// App
// HeaderHeading

import './styles/theme.css';
import './styles/global.css';
import Container from './components/Container';

import Logo from './components/Logo';
import Menu from './components/Menu';
import CountDown from './components/Countdown';
import DefaultInput from './components/DefaultInput';
import Cycles from './components/Cycles';
import DefaultButton from './components/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import Footer from './components/Footer';
import Heading from './components/Heading';

export default function App() {
  return (
    <>
      <Heading> </Heading>

      <Container>
        <Logo></Logo>
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              type='text'
              title='Titulo'
              placeholder='Digite algo'
              labelText='task'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <div>
              <Cycles></Cycles>
            </div>
          </div>

          <div className='formRow'>
            <DefaultButton
              icon={<PlayCircleIcon />}
              color='green'
            ></DefaultButton>
            <DefaultButton
              icon={<StopCircleIcon />}
              color='red'
            ></DefaultButton>
          </div>
        </form>
      </Container>

      <Container>
        <Footer></Footer>
      </Container>
    </>
  );
}
