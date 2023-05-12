import './index.css'

const ThumbnailImagesList = props => {
  const {item, matchPair} = props
  const {id, thumbnailUrl} = item
  const samePic = () => {
    matchPair(id)
  }
  return (
    <li className="item-cont">
      <button className="btn-thumb" type="button" onClick={samePic}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbnailImagesList
