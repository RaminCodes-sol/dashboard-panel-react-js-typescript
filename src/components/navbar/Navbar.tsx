import './index.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { Cross as Hamburger } from 'hamburger-react'
import { useMyContext } from '../../myContext/myContext';




const Navbar = () => {
  const { isOpen, setOpen } = useMyContext()

  return (
    <nav className='navbar-container'>

      {/*---------Navbar_LeftSide---------*/}
      <div className='navbar_leftSide'>
        <button><Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded /></button>
        <button><Link to='/'><DashboardIcon /></Link></button>
      </div>
      

      {/*---------Navbar_RightSide----------*/}
      <div className='navbar_rightSide'>
        <span><NotificationsIcon /></span>
        <span><LanguageIcon /></span>
        <span><SettingsIcon /></span>

        <figure>
          <img src='https://i.postimg.cc/1X9jfBzV/julian-wan-WNo-Ln-Jo7t-S8-unsplash.jpg' alt='img' />
        </figure>
      </div>

    </nav>
  )
}

export default Navbar