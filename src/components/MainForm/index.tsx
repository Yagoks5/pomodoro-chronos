import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import Cycles from '../Cycles';
import DefaultButton from '../DefaultButton';
import DefaultInput from '../DefaultInput';
import { useState } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export default function MainForm() {
  const { state, setState } = useTaskContext();
  const [taskName, setTaskName] = useState('');

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskName.trim() === '') {
      alert('Por favor, insira um nome para a tarefa.');
      return;
    }
    console.log('Nova tarefa criada:', taskName);
    // setTaskName('');

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaing = newTask.duration * 60;

    setState(prevState => ({
      ...prevState,
      config: { ...prevState.config },
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaining: secondsRemaing,
      formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaing),
      tasks: [...prevState.tasks, newTask],
    }));
  }

  function handleInterruptTask() {
    setState(prevState => ({
      ...prevState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00',
    }));
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          id='meuInput'
          type='text'
          title='Titulo'
          placeholder='Digite algo'
          labelText='task'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          disabled={!!state.activeTask}
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de 25min</p>
      </div>

      {state.currentCycle > 0 && (
        <div className='formRow'>
          <div>
            <Cycles></Cycles>
          </div>
        </div>
      )}

      <div className='formRow'>
        {!state.activeTask && (
          <DefaultButton
            type='submit'
            icon={<PlayCircleIcon />}
            color='green'
            key='botao_submit'
          ></DefaultButton>
        )}
        {!!state.activeTask && (
          <DefaultButton
            type='button'
            onClick={handleInterruptTask}
            icon={<StopCircleIcon />}
            color='red'
            key='botao_interrupt'
          ></DefaultButton>
        )}
      </div>
    </form>
  );
}
