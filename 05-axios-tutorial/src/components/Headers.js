import { useState } from 'react'
import axios from 'axios'

const url = 'https://icanhazdadjoke.com/'
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke')

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json',
        },
      })
      setJoke(data.joke)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="section text-center">
      <h2 className="text-center">2. Request with headers</h2>
      <button className="btn" onClick={fetchDadJoke}>
        Random joke
      </button>
      <br />
      <a href="https://icanhazdadjoke.com/" target="_blank">
        (From here)
      </a>
      <p className="dad-joke">{joke}</p>
    </section>
  )
}
export default Headers
