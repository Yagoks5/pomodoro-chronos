import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import Cycles from '../Cycles';
import DefaultButton from '../DefaultButton';
import DefaultInput from '../DefaultInput';

export default function MainForm() {
  return (
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
        <DefaultButton icon={<PlayCircleIcon />} color='green'></DefaultButton>
        <DefaultButton icon={<StopCircleIcon />} color='red'></DefaultButton>
      </div>
    </form>
  );
}
