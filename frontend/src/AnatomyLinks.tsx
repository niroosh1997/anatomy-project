import { Link } from 'react-router-dom'

/** Pills linking to the reference page for each structure a question covers.
 *  Shared by the per-question feedback and the end-of-round review list. */
function AnatomyLinks({ names, label }: { names: string[]; label: string }) {
  if (names.length === 0) return null

  return (
    <div className="anatomy-components">
      <p>{label}</p>
      <div className="anatomy-links">
        {names.map((name) => (
          <Link key={name} to={`/anatomy/${encodeURIComponent(name)}`} className="anatomy-link">
            {name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AnatomyLinks
