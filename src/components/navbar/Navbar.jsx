import DateTime from './DateTime'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <div className="left">Abdul Kareem</div>
      <div className="right">
        <img src="wifi.svg" alt="Wifi logo" />
        <DateTime />
      </div>
    </nav>
  )
}

export default Navbar
