import { useEffect } from 'react'

import customFetch from '../axios/custom'
import axios from 'axios'

const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await customFetch('/react-store-products')
      console.log(resp1)
      const resp2 = await axios(randomUserUrl)
      console.log(resp2)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">5. Custom instance</h2>
}
export default CustomInstance
