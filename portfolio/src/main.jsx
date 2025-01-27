import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import { Projects } from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Trial from './components/Trial.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='projects' element = {<Projects/>}/>
      <Route path='skills' element = {<Skills/>}/>
       <Route path='trial' element = {<Trial/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
