import './App.css'
import { Barra } from './components/Barra'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { Footer } from './components/footer'

function App() {
  return(
    <div>
      <Header/>
      <Barra/>
      <TaskList />
      <Footer/>
    </div>
  )
}

export default App
