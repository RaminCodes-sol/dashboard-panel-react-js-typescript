import './index.scss'
import HomeIcon from '@mui/icons-material/Home'
import GroupsIcon from '@mui/icons-material/Groups'
import StorefrontIcon from '@mui/icons-material/Storefront'
import LogoutIcon from '@mui/icons-material/Logout'
import { NavLink } from 'react-router-dom'
import { useMyContext } from '../../myContext/myContext'



const Sidebar = () => {
  const { isOpen } = useMyContext()

  return (
    <aside className={`aside-container ${isOpen && 'open'}`}>
  
      <ul>
        <li>
          <NavLink to='/' style={ ({ isActive }) => ({ color: isActive ? '#C1F741': '#8A8B88', filter: isActive ? 'drop-shadow(0 0 1rem #C1F741)' : ''}) }><HomeIcon /></NavLink>
        </li>
        <li>
          <NavLink to='/userList' style={ ({ isActive }) => ({ color: isActive ? '#C1F741': '#8A8B88', filter: isActive ? 'drop-shadow(0 0 1rem #C1F741)' : ''}) }><GroupsIcon /></NavLink>
        </li>
        <li>
          <NavLink to='/products' style={ ({ isActive }) => ({ color: isActive ? '#C1F741': '#8A8B88', filter: isActive ? 'drop-shadow(0 0 1rem #C1F741)' : ''}) }><StorefrontIcon /></NavLink>
        </li>
        <li>
          <NavLink to='/' style={ ({ isActive }) => ({ color: isActive ? '#C1F741': '#8A8B88', filter: isActive ? 'drop-shadow(0 0 1rem #C1F741)' : ''}) }><LogoutIcon /></NavLink>
        </li>
      </ul>

    </aside>
  )
}

export default Sidebar