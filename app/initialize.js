import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import { CreateJumpstateMiddleware } from 'jumpstate'
import App from './App'
import reducers from './manage/reducers'

// eslint-disable-next-line
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers, {},
  composer(applyMiddleware(CreateJumpstateMiddleware()))
)

const routes = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(routes, document.getElementById('app'))
