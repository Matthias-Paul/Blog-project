import {BrowserRouter, Routes, Route} from "react-router-dom"


import Header from "./component/Header.jsx"
import Home from "./pages/Home.jsx"
import SinglePost from "./pages/SinglePost.jsx"
import BlogListing from "./pages/BlogListing.jsx"
import BlogForm from "./pages/BlogForm.jsx"
import AuthorsPage from "./pages/AuthorsPage.jsx"
import ThemeProvider from "./component/ThemeProvider.jsx"
import Footer from "./component/Footer.jsx"

function App() {
  
  return (
    <>
       <BrowserRouter>
         <Header />  {/* This header component will be at the top of every page*/}
         <ThemeProvider> 
        <Routes>
         
          <Route path="/" element={ <Home /> } />
          <Route path="/blog" element={ <BlogForm /> } />
          <Route path="/single-post" element={ <SinglePost /> } />
          <Route path="/pages" element={ <BlogListing /> } />
          <Route path="/contact" element={ <AuthorsPage /> } />
        
        </Routes>
        </ThemeProvider>
         <Footer /> {/* This footer component will be at the bottom of every page */}
      </BrowserRouter>
    </>
  )
}

export default App
