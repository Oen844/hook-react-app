import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './01-useState/CounterApp'
import CounterWithCounterHook from './01-useState/CounterWithCounterHook'
import SimpleForm from './02-useEffect/SimpleForm'
import { HooksApp } from './HooksApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp/> */}
    {/* <CounterWithCounterHook/> */}
    <SimpleForm/>
  </React.StrictMode>
)
