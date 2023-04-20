import { Provider } from 'react-redux'
import { store } from './store'

import { CustomModal } from './components'
import { MessagingPage } from './pages'

function App () {
  return (
    <Provider store={ store }>
      <MessagingPage />
      <CustomModal />
    </Provider>
  )
}

export default App
