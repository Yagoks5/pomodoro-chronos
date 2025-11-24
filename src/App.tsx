import Home from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import { TaskContentProvider } from './contexts/TaskContext/TaskContextProvider';

export default function App() {
  return (
    <>
      <TaskContentProvider>
        <Home />
      </TaskContentProvider>
    </>
  );
}
