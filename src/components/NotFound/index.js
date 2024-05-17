// Write your code here
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="not-found-icon"
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
    />
    <h1 className="not-found-heaing">Lost Your Way?</h1>
    <p className="not-found-desc">
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default NotFound
