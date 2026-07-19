import { Link, useParams } from 'react-router-dom'

function AnatomyComponentPage() {
  const { name = '' } = useParams<{ name: string }>()
  const decodedName = decodeURIComponent(name)

  return (
    <div className="card">
      <h2>{decodedName}</h2>
      <p>Details coming soon.</p>
      <Link to="/" className="back-link">
        Back to quiz
      </Link>
    </div>
  )
}

export default AnatomyComponentPage
