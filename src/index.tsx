import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import './public-path'

function render(props: any) {
  const { container } = props
  ReactDOM.render(
    <React.StrictMode>
      {/* @ts-ignore */}
      <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/core/home/react-micro-app' : '/'}>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    container ? container.querySelector('#root') : document.querySelector('#root')
  )
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react] react app bootstraped')
}

export async function mount(props: any) {
  console.log('[react] props from main framework', props)
  render(props)
}

export async function unmount(props: any) {
  const { container } = props
  console.log('[react] react app unmount', props)
  ReactDOM.unmountComponentAtNode(
    container ? container.querySelector('#root') : document.querySelector('#root')
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
