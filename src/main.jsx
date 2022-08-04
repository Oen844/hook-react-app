import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './01-useState/CounterApp'
import CounterWithCounterHook from './01-useState/CounterWithCounterHook'
import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
import SimpleForm from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayaoutEffect/Layout'
import { CallbackHook } from './06-memos/CallbackHook'
import { Memorize } from './06-memos/Memorize'
import { MemorizeHook } from './06-memos/MemorizeHook'
import { Padre } from './07-tarea-memo/Padre'
import { HooksApp } from './HooksApp'
// import './08-useReducer/intro-reducer.js'

import './index.css'
import { TodoApp } from './08-useReducer/TodoApp'

import { BrowserRouter } from "react-router-dom";
import { MainApp } from './09-useContext/mainApp'

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
    {/* <MemorizeHook/> */}
    {/* <CallbackHook/> */}
    {/* <Padre /> */}
    {/* <TodoApp/> */}
    <BrowserRouter>
      <MainApp/>

    </BrowserRouter>
  </React.StrictMode>
)
