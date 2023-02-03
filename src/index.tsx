import './public-path.js'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ReactQueryPage } from './pages/ReactQuery'
import { Home } from './pages/Home'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'react-query',
          element: <ReactQueryPage />,
        },
      ],
    },
  ],
  // @ts-ignore
  { basename: window.__POWERED_BY_QIANKUN__ ? '/react-micro-app' : '/' }
)

function render(props: any) {
  const { container } = props
  ReactDOM.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
    container ? container.querySelector('#root') : document.querySelector('#root')
  )
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

type Props = {
  message: string
  testFunc: (msg: string) => void
  SharedComponent: React.ElementType | null
}

let SharedComponent: React.ElementType | null = null

const getSharedComponent = () => {
  return SharedComponent;
}

export async function bootstrap() {
  console.log('[react] bootstrap')
}

export async function mount(props: Props) {
  console.log('[react] mount - props from main framework', props)
  SharedComponent = props.SharedComponent
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
// reportWebVitals()

export { getSharedComponent }
