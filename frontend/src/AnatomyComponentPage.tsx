import { Link, useParams } from 'react-router-dom'
import { anatomyData } from './anatomyData'
import { anatomyImages } from './anatomyImages'

function AnatomyComponentPage() {
  const { name = '' } = useParams<{ name: string }>()
  const decodedName = decodeURIComponent(name)
  const entry = anatomyData[decodedName]
  const image = anatomyImages[decodedName]

  return (
    <div className="card">
      <h2>{decodedName}</h2>
      {!entry && <p>Details coming soon.</p>}
      {image && (
        <figure className="anatomy-figure">
          <img src={image.src} alt={`Anatomical illustration of ${decodedName}`} />
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
      <Link to="/" className="back-link">
        Back to quiz
      </Link>
    </div>
  )
}

export default AnatomyComponentPage
