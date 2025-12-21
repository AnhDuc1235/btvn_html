import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import Nav from "./components/Nav"
import ProductDetail from "./pages/ProductDetail"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gioi-thieu" element={<About/>}/>
      <Route path="/san-pham" element={<Products/>}/>
      <Route path="/lien-he" element={<Contact/>}/>
      <Route path="/san-pham/:productId" element={<ProductDetail/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}
