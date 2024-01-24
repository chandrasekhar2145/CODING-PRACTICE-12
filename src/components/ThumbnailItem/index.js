// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const thumbnailActive = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickImages = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="btn" onClick={onClickImages}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailActive}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
