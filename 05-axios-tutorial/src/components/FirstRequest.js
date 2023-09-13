import { useEffect } from 'react'
import axios from 'axios'

// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products'

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios(url)
      const data = response.data
      console.log('first response data: ', data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">1. First request</h2>
}

export default FirstRequest
