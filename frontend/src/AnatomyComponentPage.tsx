import { Link, useLocation, useParams } from 'react-router-dom'
import { anatomyData } from './anatomyData'
import { anatomyImages } from './anatomyImages'
import { savedRoundCourse } from './roundStorage'

/** Where "back" should lead from a reference page.
 *
 *  "/" is the course picker, not the quiz, so linking there drops the reader
 *  out of the round they were in. Preference order: the page they actually
 *  came from, then the round still saved in this browser, then the picker.
 */
function backTarget(from: string | undefined): { to: string; label: string } {
  if (from && from.startsWith('/quiz/')) return { to: from, label: 'Back to quiz' }
  const course = savedRoundCourse()
  if (course) return { to: `/quiz/${encodeURIComponent(course)}`, label: 'Back to quiz' }
  return { to: '/', label: 'Back to courses' }
}

function AnatomyComponentPage() {
  const { name = '' } = useParams<{ name: string }>()
  const location = useLocation()
  const back = backTarget((location.state as { from?: string } | null)?.from)
  const decodedName = decodeURIComponent(name)
  const entry = anatomyData[decodedName]
  const image = anatomyImages[decodedName]

  return (
    <div className="card">
      <h2>{decodedName}</h2>
      {!entry && <p>Details coming soon.</p>}
      {image && (
        <figure className="anatomy-figure">
          {/* anatomyImages stores root-absolute paths; prefix BASE_URL so they
              also resolve when served from a subpath (GitHub Pages). */}
          <img
            src={`${import.meta.env.BASE_URL}${image.src.replace(/^\//, '')}`}
            alt={`Anatomical illustration of ${decodedName}`}
          />
          {image.note && <p className="image-note">{image.note}</p>}
          <figcaption>
            {image.author} — {image.license}
            {image.source && (
              <>
                {' · '}
                <a href={image.source} target="_blank" rel="noreferrer">
                  source
                </a>
              </>
            )}
          </figcaption>
        </figure>
      )}
      {entry?.type === 'muscle' && (
        <dl className="anatomy-fields">
          <dt>Origin</dt>
          <dd>{entry.origin}</dd>
          <dt>Insertion</dt>
          <dd>{entry.insertion}</dd>
          <dt>Action</dt>
          <dd>{entry.action}</dd>
        </dl>
      )}
      {entry?.type === 'joint' && (
        <dl className="anatomy-fields">
          <dt>Bones</dt>
          <dd>{entry.bones.join(', ')}</dd>
          <dt>Joint Type</dt>
          <dd>{entry.jointType}</dd>
          <dt>Classification</dt>
          <dd>{entry.classification}</dd>
          <dt>Axis</dt>
          <dd>{entry.axis}</dd>
          <dt>Actions</dt>
          <dd>{entry.actions.join(', ')}</dd>
        </dl>
      )}
      {entry?.type === 'ligament' && (
        <dl className="anatomy-fields">
          <dt>Connects</dt>
          <dd>{entry.connects}</dd>
        </dl>
      )}
      {entry?.type === 'bone' && <p>{entry.description}</p>}
      <Link to={back.to} className="back-link">
        {back.label}
      </Link>
    </div>
  )
}

export default AnatomyComponentPage
