import { Route, Routes } from 'react-router-dom'
import { QuizProvider } from './QuizContext'
import Question from './Question'
import AnatomyComponentPage from './AnatomyComponentPage'
import './App.css'

function App() {
  return (
    <QuizProvider>
      <h1>Anatomy Quiz</h1>
      <Routes>
        <Route path="/" element={<Question />} />
        <Route path="/anatomy/:name" element={<AnatomyComponentPage />} />
      </Routes>
    </QuizProvider>
  )
}

export default App
