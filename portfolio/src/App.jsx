// Desc: Main App component that will be rendered in the root element of the HTML file. It contains the Header, Footer, and Outlet components. The Outlet component is used to render the child components based on the route configuration. The Header and Footer components are used to display the header and footer of the application, respectively.
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  
  return (
    <>

     <Header></Header>
     <Outlet></Outlet>
     <Footer></Footer>


    </>
  )
}

export default App
