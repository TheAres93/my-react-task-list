import './App.css'
import Barra from './components/Barra'
import Header from './components/Header'
import TasksList from './components/TasksList'
import ContextProvider from './context/contextProvider'

function App() {

  return(
    <div>
      <ContextProvider> 
        <Header/>
        <Barra/>
        <TasksList/>
      </ContextProvider>
    </div>
)};

export default App
