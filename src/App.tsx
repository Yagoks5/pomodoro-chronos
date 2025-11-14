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
import { useState } from 'react';

export default function App() {
  const [numero, setNumero] = useState(0);

  function handleClick() {
    setNumero(prevState => prevState + 1); // guarda o valor anterior e soma 1
  }

  return (
    <>
      <Heading>Número: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>

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
              labelText={numero.toString()}
              id='meuInput'
              type='text'
              title='Titulo'
              placeholder='Digite algo'
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
