import FirstRequest from './components/FirstRequest'
import Headers from './components/Headers'
import PostRequest from './components/PostRequest'
import Title from './components/Title'

import './axios/global'
import GlobalInstance from './components/GlobalInstance'
import CustomInstance from './components/CustomInstance'
import Interceptors from './components/Interceptors'

function App() {
  return (
    <main>
      <Title />
      <FirstRequest />
      <Headers />
      <PostRequest />
      <GlobalInstance />
      <CustomInstance />
      <Interceptors />
    </main>
  )
}

export default App
