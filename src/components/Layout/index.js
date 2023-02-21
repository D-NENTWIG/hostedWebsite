import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/index.js'
import './index.scss'

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>

        <Outlet />

      </div>
    </div>
  )
}

export default Layout
