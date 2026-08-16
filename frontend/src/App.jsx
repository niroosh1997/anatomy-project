import { Link, Route, Routes } from 'react-router-dom'
import CoursePicker from './CoursePicker'
import QuizPage from './QuizPage'
import AnatomyComponentPage from './AnatomyComponentPage'
import './App.css'

function App() {
  return (
    <>
      {/* Was "Anatomy Quiz", but the app now covers more than one course, so
          the title is neutral and the course name is shown inside its quiz.
          It doubles as the way back to the picker. */}
      <h1>
        <Link to="/" className="home-link">
          Quiz
        </Link>
      </h1>
      <Routes>
        <Route path="/" element={<CoursePicker />} />
        <Route path="/quiz/:course" element={<QuizPage />} />
        {/* Reference pages are shared across courses — an orthopedics question
            about the ACL links to the same page an anatomy one does. */}
        <Route path="/anatomy/:name" element={<AnatomyComponentPage />} />
      </Routes>
    </>
  )
}

export default App
