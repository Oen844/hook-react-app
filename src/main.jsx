import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './01-useState/CounterApp'
import CounterWithCounterHook from './01-useState/CounterWithCounterHook'
import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
import SimpleForm from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayaoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'
import { HooksApp } from './HooksApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp/> */}
    {/* <CounterWithCounterHook/> */}
    {/* <SimpleForm/> */}
    {/* <FormWithCustomHook/> */}
    {/* <MultipleCustomHooks/> */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    <Memorize/>
  </React.StrictMode>
)
