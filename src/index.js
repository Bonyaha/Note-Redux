import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import noteReducer from './reducers/noteReducer'
//import Dashboard from './App'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

const store = createStore(noteReducer)

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(
    <Provider store={store}>
      {' '}
      <App />
    </Provider>
  )
}

renderApp()
store.subscribe(() => {
  const storeNow = store.getState()
  console.log(`state is this:${storeNow}`)
})
store.subscribe(renderApp)
