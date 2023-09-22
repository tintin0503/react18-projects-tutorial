import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

const Home = () => {
  return (
    <>
      <h2>products</h2>
      <Outlet />
    </>
  )
}
export default Home
