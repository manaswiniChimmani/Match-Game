import './index.css'

const TabsList = props => {
  const {item, displayContent, activeTab} = props
  const {tabId, displayText} = item
  const applyItem = () => {
    displayContent(tabId)
  }
  const changeColor = activeTab ? 'change' : null
  return (
    <li className="head-cont">
      <button
        type="button"
        className={`table-head ${changeColor}`}
        onClick={applyItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabsList
