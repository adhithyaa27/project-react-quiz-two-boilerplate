import Quizpage from './Component/Quizpage'
import './App.css'
import questions from '../resources/quizQuestion.json'

function App() {


  return(
    <div>
      <Quizpage questions={questions}/>
    </div>
    
  )
}

export default App
