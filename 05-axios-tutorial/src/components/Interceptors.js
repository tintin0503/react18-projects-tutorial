import { useEffect } from 'react'
import authFetch from '../axios/interceptors'
const url = 'https://course-api.com/react-store-products'

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch('/react-store-products')
      console.log('resp interceptors ', resp)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">6. Interceptors</h2>
}
export default Interceptors
